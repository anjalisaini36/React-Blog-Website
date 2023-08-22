// const { default: mongoose } = require("mongoose");

const { default: mongoose } = require("./mongoDB");

const LoginSchema=new mongoose.Schema({
    email:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    contact:{
        type: Number,
        required:true
    },
    password:{
        type: String,
        required: true
    }
})
const Login=new mongoose.model("LoginCollection",LoginSchema);
 module.exports=Login


