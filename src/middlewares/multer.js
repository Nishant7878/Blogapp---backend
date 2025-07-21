const multer = require('multer');
const { v2: cloudinary } = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

// 
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

console.log("Cloudinary config:", cloudinary.config());

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'events-gallery',
        format: (req, file) => {

            const fileExtension = file.originalname.split('.').pop();
            return fileExtension === 'jpg' || fileExtension === 'jpeg' ? 'jpg' : fileExtension;
        },
        public_id: (req, file) => file.originalname.split('.')[0],
    },
});


const upload = multer({ storage });

module.exports = upload;