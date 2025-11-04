import express from 'express'
import upload from '../middleware/multer/multer.uploads.js'
import { addMenuItem, editMenuItem, getAllMenuItems, removeMenuItem } from '../controllers/menuitem.controller.js'
import AdminValidator from '../middleware/auth/admin.middleware.js'
import customerValidator from '../middleware/auth/customer.middleware.js'

const menuRouter = express.Router()
menuRouter.post('/add', upload.array('images', 4), AdminValidator, addMenuItem)
menuRouter.post('/fetch', customerValidator, getAllMenuItems)
menuRouter.post('/edit/:menuId', AdminValidator, editMenuItem)
menuRouter.post('/delete/:menuId', AdminValidator, removeMenuItem)
export default menuRouter
