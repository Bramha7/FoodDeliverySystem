import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    ward: { type: String, required: true },
    landmark: { type: String, required: true }
  },
  order_history: [{
    type: mongoose.Schema.ObjectId, ref: "Order"
  }],
  phone_number: {
    type: String,
    unique: true,
    required: true

  },
}, { timestamps: true })

export const User = mongoose.model('User', userSchema)

