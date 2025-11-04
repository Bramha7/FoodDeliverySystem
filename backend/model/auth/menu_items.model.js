import mongoose, { Schema } from 'mongoose'

const menuItemSchema = new mongoose.Schema({
  images: [String],
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  price: {
    type: Schema.Types.Decimal128,
    required: true
  },
  category: {
    type: String,

  },

  available: {
    type: Boolean,
    default: true
  }
  ,

}, { timestamps: true })

export const MenuItem = mongoose.model('MenuItem', menuItemSchema)
