import jwt from 'jsonwebtoken';
const JWT_TOKEN_DRIVER = (id, email) => {

  const token = jwt.sign({ id, email }, process.env.JWT_SECRET_DRIVER, {
    expiresIn: '7d'
  })
  return token



}

export default JWT_TOKEN_DRIVER;
