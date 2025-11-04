import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloud } from 'cloudinary'

cloud.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: 'FoodDelivery',
    format: async (req, file) => file.mimetype.split('/')[1], // 'jpeg', 'png', etc.
    allowed_formats: ['jpg', 'jpeg', 'png'],
  },
});

export default storage;
