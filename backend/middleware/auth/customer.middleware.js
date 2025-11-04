
import jwt from 'jsonwebtoken'

const customerValidator = async (req, res, next) => {

  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authroization failed!!"
    })
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET)
  if (!decoded) {
    return res.status(403).json({
      success: false,
      message: "Token Expired!!"
    })
  }
  if (!decoded.id) {
    return res.status(403).json({
      success: false,
      message: "Forbidden!!"
    })
  }




  next()





}

export default customerValidator
