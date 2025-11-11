const mongoose =require('mongoose');

const foodSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    video:{
        //video url is used instead of actual video file for simplicity and ease of access
        type:String,
        required:true
    },
    description:{
        type:String,

    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'foodPartner',
        required:true
    }
})

const foodModel= mongoose.model("food", foodSchema);
module.exports= foodModel;