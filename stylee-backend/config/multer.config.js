const multer = require('multer');

//configure storage for product sub-category images
const productSubCategoryStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.SUB_CATOGERIES_IMAGES_PATH);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }

})
const uploadProductSubCategoryImage = multer({storage: productSubCategoryStorage});

//configure storage for products images
const productStorage = multer.diskStorage({
    destination:  (req, file, cb) => {
        cb(null, process.env.PRODUCTS_IMAGES_PATH);
    },
    filename:  (req, file, cb) => {
         cb(null, `${Date.now()}-${file.originalname}`)
    }

})
const uploadProductImage = multer({storage: productStorage});


module.exports = {uploadProductImage, uploadProductSubCategoryImage}