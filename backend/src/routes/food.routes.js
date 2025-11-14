const express = require('express');
const foodController = require('../controllers/food.controller');
const authMiddleware = require('../middlewares/auth.middleware');   

const router = express.Router();

//express doesn't read file format data defaulty so we use multer middleware for that
const multer = require('multer');
const upload=multer({
    storage:multer.memoryStorage(),
})

//protected route for food partner to create food item
router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodController.createFood)

//for users to view food items
router.get('/',authMiddleware.authUserMiddleware,foodController.getFoodItems);
module.exports = router;

