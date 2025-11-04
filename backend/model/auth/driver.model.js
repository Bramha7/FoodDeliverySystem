import mongoose from 'mongoose'


const DriverSchema = new mongoose.Schema({
  username: String,
  image: {
    type: String,
    required: true
  },
  full_name: { type: String, required: true },
  vehicle_number: {
    type: String,
    required: function() { return this.vehicle_type !== 'bicycle'; }
  },
  vehicle_type: { type: String, enum: ['bike', 'car', 'bicycle'], default: 'bicycle' },
  phone_number: { type: String, required: true },
  location: String,
  email: { type: String, unique: true },
  password: String,
  status: { type: String, enum: ['online', 'offline', 'suspended'], default: 'offline' },
  completed_deliveries: { type: Number, default: 0 }
}, { timestamps: true });

const Driver = mongoose.model('Driver', DriverSchema)
export default Driver

