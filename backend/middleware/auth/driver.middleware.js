import jwt from 'jsonwebtoken'


const driverValidator = async (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authorization failed!!"

    })
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_DRIVER)
  if (!decoded) {
    return res.status(403).json({
      success: false,
      message: "Forbidden!"
    })
  }
  next()

}

export default driverValidator
