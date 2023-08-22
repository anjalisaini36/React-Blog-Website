const { default: mongoose } = require("./mongoDB");

const BlogSchema=new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    summary:{
        type: String,
        required:true
    },
    file:{
        type: Object,
        required:true,
    },
    name:{
        type: String,
        required:true
    },
    date:{
        type: String,
        required:true
    },
    // content:{
    //     type:String,
    //     required:true
    // }
});
const Blog=new mongoose.model("BlogCollection", BlogSchema);
module.exports=Blog;