

import mongoose from 'mongoose'

const OrderedItemSchema = new Schema({
  menu_item: { type: Schema.Types.ObjectId, ref: 'MenuItem', required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  price: { type: Number, required: true },
  total_amount: { type: Number, required: true }, // price * quantity (auto-filled below if missing)
  status: {
    type: String,
    enum: ['pending', 'preparing', 'ready_for_pickup', 'out_for_delivery', 'delivered', 'cancelled'],
    default: 'pending',
  }
}, { _id: false });


const orderSchema = new Schema({
  customer_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  driver_id: { type: Schema.Types.ObjectId, ref: 'Driver' },

  ordered_items: { type: [OrderedItemSchema], default: [] },

  status: {
    type: String,
    enum: ['pending', 'preparing', 'ready_for_pickup', 'out_for_delivery', 'delivered', 'cancelled'],
    default: 'pending',
  },
  payment_status: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending',
  },

  placed_at: { type: Date, default: Date.now },
  accepted_at: Date,
  prepared_at: Date,
  picked_up_at: Date,

  total_amount: { type: Number, default: 0 }
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema)






