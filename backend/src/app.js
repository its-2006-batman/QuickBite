// create server
 // starts the server by terminal command npx nodemon server.js
const express = require('express');

//for cookie to token
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/auth.routes');

const foodRoutes = require('./routes/food.routes');

const foodPartnerRoutes = require('./routes/food-partner.routes');

const cors = require('cors');

const app = express();
//request body ko json format me convert krne k liye middleware use krna padta hai mtlb req.body iske bina kaam nhi karegi
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',  //frontend ka address
    credentials:true,  //cookies allow krne k liye
}));
app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);
app.use('/api/food-partner',foodPartnerRoutes);


app.get("/", (req,res)=>{
    res.send("Hello World! MAA KA BHOSDA AAG");
})
module.exports = app;