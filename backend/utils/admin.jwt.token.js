import jwt from 'jsonwebtoken'

export const Admin_JWT_Token = (email, password) => {
  const token = jwt.sign({ email, password }, process.env.ADMIN_JWT_SECRET)
  return token

}

