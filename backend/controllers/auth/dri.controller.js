import Driver from "../../model/auth/driver.model.js";
import bcrypt from "bcryptjs";
import JWT_TOKEN_DRIVER from "../../utils/driver.jwt.tokens.js";

const driverRegister = async (req, res) => {
  try {

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    const { username, full_name, vehicle_number, vehicle_type, phone_number, email, password, location } = req.body;
    const image = req.file.path

    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Image file is required"
      });
    }

    if (!username || !full_name || !phone_number || !email || !password || !location || !vehicle_type || !image) {

      return res.status(400).json({
        success: false,
        message: "All fields are required"
      })
    }

    const existingDriver = await Driver.findOne({ email })
    if (existingDriver) {
      return res.status(400).json({
        success: false,
        message: "Driver already exits"
      })
    }
    const hashedPassword = await bcrypt.hash(password, 7)
    await Driver.create({
      email,
      username,
      password: hashedPassword,
      vehicle_number,
      vehicle_type,
      phone_number,
      full_name,
      location,
      image
    })

    res.status(201).json({
      success: true,
      messaage: "Driver registered successfully"
    })






  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "Internal Server Error!"
    })

  }


}



// driver login


const driverLogin = async (req, res) => {

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!"
    })

  }
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!"
    })
  }

  const driver = await Driver.findOne({ email })
  if (!driver) {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials!"
    })
  }

  const passwordMatch = bcrypt.compare(password, driver.password)
  if (!passwordMatch) {
    return res.status(400).json({
      success: false,
      message: "Invalid Credentials!"
    })
  }

  const token = JWT_TOKEN_DRIVER(driver._id, email)
  res.status(200).json({
    success: true,
    message: "Logged in Succesfull",
    token
  })


}

export { driverLogin, driverRegister } 
