import jwt from 'jsonwebtoken'
export const JWT_Token = ({ id, email }) => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  })
  return token;
}
