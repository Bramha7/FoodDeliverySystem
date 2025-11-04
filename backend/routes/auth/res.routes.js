import express from 'express'
import AdminLogin from '../../controllers/auth/res.controller.js'


const adminRouter = express.Router()
adminRouter.post('/login', AdminLogin)


export default adminRouter
