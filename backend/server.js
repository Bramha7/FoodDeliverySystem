import express from 'express'
import 'dotenv/config'
import connectDB from './config/Db.js'
import driverRouter from './routes/auth/dri.routes.js'
import customerRouter from './routes/auth/cus.routes.js'
import adminRouter from './routes/auth/res.routes.js'
import menuRouter from './routes/menu_items.routes.js'
import cors from 'cors'
import { rateLimit } from 'express-rate-limit'
connectDB()


const app = express()



const limiter = rateLimit({
  windowMs: 30 * 1000, // 15 minutes
  limit: 11, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
  legacyHeaders: true, // Disable the `X-RateLimit-*` headers.
  ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
  skipSuccessfulRequests: true,
  message: "Too many requests, Please try again later"
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// setting home page for test


//  -----------------------------------------------------middleware setup ------------------------------------------------------

// routes setup

app.use(cors({
  origin: ['http://localhost:3001', '*']
}))

app.use('/api/auth/customer', customerRouter)
app.use('/api/auth/driver', driverRouter)
app.use('/api/auth/admin', adminRouter)
app.use('/api/menu', menuRouter)




















////////////////////////////////////// server listening 


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running  in port ${port}`)
})


