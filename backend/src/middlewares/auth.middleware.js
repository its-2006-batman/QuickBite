const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authFoodPartnerMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized Access"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const foodPartner = await foodPartnerModel.findById(decoded.id);

        req.foodPartner = foodPartner;
        next();

    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized Access"
        });
    }
}

async function authUserMiddleware(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "Please Login First Bacha"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.id);
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid Token"
        })
    }
}

module.exports = {
    authFoodPartnerMiddleware,
    authUserMiddleware
};