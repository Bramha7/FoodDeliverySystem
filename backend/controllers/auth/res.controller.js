import { Admin_JWT_Token } from "../../utils/admin.jwt.token.js";

const AdminLogin = async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })
  }
  const { email, password } = req.body;
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })
  }
  if (email !== adminEmail && password !== adminPassword) {

    return res.status(403).json({
      success: false,
      message: "Unauthorized Access!!"
    })
  }

  const token = Admin_JWT_Token(email, password)

  res.status(200).json({
    success: true,
    message: "Admin Login Successful!!",
    token
  })






}

export default AdminLogin
