import express from 'express'
import upload from '../../middleware/multer/multer.uploads.js'
import { driverLogin, driverRegister } from '../../controllers/auth/dri.controller.js'



const driverRouter = express.Router()
driverRouter.post('/register', upload.single('image'), driverRegister)
driverRouter.post('/login', driverLogin)

export default driverRouter

