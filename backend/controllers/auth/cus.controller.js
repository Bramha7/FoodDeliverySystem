import bcrypt from "bcryptjs"
import { User } from "../../model/auth/customer.model.js"
import { JWT_Token } from "../../utils/generate.tokens.js"
import sendMail from "../../services/nodemailer.js"


// controller of customer registration
const userRegister = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Fields cannot be empty!!"
      })
    }

    const { username, email, password, address, phone_number } = req.body
    if (!username || !email || !password || !address || !phone_number) {
      return res.status(400).json({
        success: false,
        message: "Can't miss a fields."
      })
    }

    const alreadyAvailable = await User.findOne({ email })
    if (alreadyAvailable) {
      return res.status(401).json({
        success: false,
        message: "User already Exist!"
      })
    }
    const hashedPassword = await bcrypt.hash(password, 11);
    await User.create({
      email,
      username,
      phone_number,
      password: hashedPassword,
      address,
    })

    await sendMail({
      email,
    })

    res.status(201).json({
      success: true,
      message: "User registered Successfully."
    })
  } catch (err) {
    if (err.code === 11000) {
      const field = Object.keys(err.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists!!`
      })


    }

  }


}


// logic for customer login
const userLogin = async (req, res) => {

  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "All field required"
      })

    }
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All field required"
      })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials!!"
      })
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Credentials!!"

      })
    }
    const token = JWT_Token({ id: user._id, email: email })

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token
    })







  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    })

  }




}




export { userLogin, userRegister }
