const express = require("express");
var cors = require("cors");
var bodyParser = require('body-parser')
const Login = require("./loginModal");
const { default: mongoose } = require("mongoose");
const Blog = require("./blogModal");
const multer=require('multer')
const path=require("path");
// const upload = multer({ dest: "uploads/" });
const app = express();
const PORT = 4001;

app.use(
  cors({
    origin: "*",
  })
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open",async function () {
  console.log("Connected successfully"); 
});

app.use(bodyParser.json());



const storage=multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null,'public/images')
  }, 
  filename:(req, file,cb)=>{
    cb(null,file.fieldname +"_"+ Date.now() + path.extname(file.originalname))
  }
})
const upload=multer({
  storage:storage
});
app.post("/upload", (req,res)=>{
  console.log(req.file)
})


app.post("/register", async (req, res) => {
  console.log("register", req.body);
  const data={
    email:req.body.email,
    name:req.body.name,
    contact:req.body.contact,
    password:req.body.password
  }
  const findData= await Login.find({name:req.body.name});
  const user = new Login(data);
if(findData.length===0){
    try {
        await user.save();
        res.send({message:"User registered successfully!"});
      } catch (error) {
        console.log("register error:",error)
        res.status(500).send({message:"Something went wrong!"});
      }
}else{
    res.status(401).send({message:"User alerady exist"});
}
});

app.post("/login", async(req,res)=>{
   console.log("login", req.body);
  const {name,password}=req.body;
  Login.findOne({name:name})
  .then(user=>{
    console.log("user.password",user)
    if(user){
      if(user.password==password){
        res.send({status:'success',statusCode:200,message:'You are successfully logged in.'}) 
      }else{
        res.send({message:"The password is incorrect"})
        // alert("password is incorrect")
      }
    }else{ 
      res.send({message:"The Record is not existed"})
    
    }
  });
});

app.post("/newblog", async (req, res) => {
  console.log("newblog", req.body);
  const data={
    title:req.body.title,
    summary:req.body.summary,
    name:req.body.name,
    date:req.body.date,
    file:req.body.file,
    // content:req.body.content
  }
  const findBlog= await Blog.find({title:req.body.title});
  const blog = new Blog(data);
if(findBlog.length===0){

    try {
        await blog.save();
        res.send({message:"Blog created successfully!"});
      } catch (error) {
        res.status(500).send({message:"Something went wrong!"});
      }
}else{
    res.status(401).send({message:"This Blog alerady exist"});
}
});

app.get('/getallBlog',async(req,res)=>{
  try{
    const allBlog= await Blog.find({})
    res.send({status:"ok",data:allBlog})
 } catch(error){
  console.log("blog error", error)
 } 
});

app.get("/blog", async(req,res)=>{
  console.log("slug", req.query);
 const {id}=req.query;
 Blog.findOne({_id:id})
 .then(blog=>{
   console.log("detail",blog)
   res.send({status:'success',statusCode:200,message:'Successfull blog found.',data:blog})
 })
});

// app.post("/delete", async(req,res)=>{
//   console.log("delete", req.query);
//  const {id}=req.query;
//  Blog.findOneAndDelete({_id:id})
//  .then(blog=>{
//    console.log("detail",blog)
//    res.send({status:'success',statusCode:200,message:'Successfull blog found.',data:blog})
//  })
// });

app.delete("/deleteblog", async(req,res)=>{
  try{
    const {id}=req.query;
    console.log("delete id:",req.query)
    Blog.findOne({_id:id})
    .then(blog=>{
      console.log("detail",blog)
      blog.deleteOne();
      res.send({status:'success',statusCode:200,message:'Successfull blog deleted.'})
    })
  }catch(error){
    console.log(error)
  }
})

app.put("/update", async (req, res) => {
  console.log("update", req.body);
  const data={
    title:req.body.title,
    summary:req.body.summary,
    name:req.body.name,
    date:req.body.date,
    // content:req.body.date
  }
  const filter={_id:req.body._id}
  const findBlog= await Blog.findOneAndUpdate(filter,data);
if(findBlog){
    try {
        res.send({message:"Blog updated successfully!"});
      } catch (error) {
        res.status(500).send({message:"Something went wrong!"});
      }
}else{
    res.status(401).send({message:"This Blog alerady exist"});
}
});

app.get("/",async(req,res)=>{
    res.send({message:"working"})
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));


