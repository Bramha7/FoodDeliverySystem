import express from 'express'
import { userLogin, userRegister } from '../../controllers/auth/cus.controller.js';


const customerRouter = express.Router()

customerRouter.post('/register', userRegister)
customerRouter.post('/login', userLogin)


export default customerRouter;
