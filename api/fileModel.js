const { default: mongoose } = require("./mongoDB");

const FileSchema=new mongoose.Schema({
image:String
});
const File=new mongoose.model("BlogCollection", FileSchema);
module.exports=File;