const mongoose=require("mongoose");
const url="mongodb+srv://anjalisaini3661:anjAliSAini@cluster0.l7hha0i.mongodb.net/"
mongoose.connect(url)

.then(()=>{
    console.log("mongodb connected")
})
.catch((error)=>{
    console.log("failed to connection",error) 
})

module.exports= mongoose;