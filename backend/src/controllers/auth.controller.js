const userModel = require('../models/user.model');
//for hashing password
const bcrypt = require('bcryptjs');
//for web token
const jwt = require('jsonwebtoken');

const foodPartnerModel = require('../models/foodpartner.model');

async function registerUser(req, res) {

    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({ email });

    if (isUserAlreadyExists) {
        return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({ id: user.id, }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered successfully", user: {
            id: user.id,
            email: user.email,
            fullName: user.fullName
        }
    });

}

async function loginUser(req, res) {

    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPsswordisValid = await bcrypt.compare(password, user.password);

    if (!isPsswordisValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user.id, }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in Successfully",
        user: {
            id: user.id,
            email: user.email,
            fullName: user.fullName
        }
    })
}

function logoutUser(req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "User logged out successfully" });
}

async function registerFoodPartner(req, res) {
    const { name, email, password,phone,address,contactName } = req.body;

    const isAccountsAlreadyExists = await foodPartnerModel.findOne({ email });
    if (isAccountsAlreadyExists) {
        return res.status(400).json({ message: "Food Partner already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const foodPartner = await foodPartnerModel.create({
        name,
        email,
        phone,
        address,
        contactName,
        password: hashedPassword
    })

    const token = jwt.sign({ id: foodPartner.id, }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "Food Partner registered successfully",
        foodPartner: {
            id: foodPartner.id,
            name: foodPartner.name,
            email: foodPartner.email
        }
    })
}

async function loginFoodPartner(req, res) {
    const { email, password } = req.body;

    const foodPartner = await foodPartnerModel.findOne({ email });

    if (!foodPartner) {
        return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordisValid = await bcrypt.compare(password, foodPartner.password);

    if (!isPasswordisValid) {
        return res.status(400).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: foodPartner.id, }, process.env.JWT_SECRET)

    res.cookie("token", token)
    res.status(200).json({
        message: "Food Partner logged in successfully",
        foodPartner: {
            id: foodPartner.id,
            name: foodPartner.name,
            email: foodPartner.email
        }
    })
}

function logoutFoodPartner(req, res) {
    res.clearCookie("token");
    res.status(200).json({ message: "Food Partner logged out successfully" });
}
module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
};