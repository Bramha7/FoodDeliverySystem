import jwt from 'jsonwebtoken'


const AdminValidator = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authorization failed!"
    })
  }

  const decoded = jwt.verify(token, process.env.ADMIN_JWT_SECRET)
  console.log(decoded)
  if (!decoded.password || !decoded.email) {
    return res.status(403).json({
      success: false,
      message: "Forbidded!!"
    })
  }

  next()


}


export default AdminValidator
