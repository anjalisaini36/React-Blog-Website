import React, { useState } from 'react'
import Login from '../../component/Login';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../helper';
// import Cookies from 'universal-cookie';
import  { useCookies } from 'react-cookie';


function Loginpage(item) {
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const[cookies,setCookie]=useCookies(['name'])
  const navigate=useNavigate();

const handleLoginUser=async()=>{
  const payload={
    name: name,
    password:password
  }
  console.log("payload",payload); 
  if(name!==null && name!==""&& password!==""&& password!==null){
    try {
      const result=await loginUser(payload);
      console.log("rrrrresultttt",result)
      if(result){
        if(result.status === "success"){
          setCookie('name',name,{path:'/'})
          // setCookie('password',password,{path:'/'})
        //  const cookies = new Cookies()
        //  cookies.set("name",name,{path:'/'})
        //  console.log(cookies.get("name"))
          navigate('/newblog')
          setName("");
          setPassword("");
        }else{
          alert(result.message)
          console.log("result.msg",result.message)
        }
      }
      } catch (error) {
      console.log("handleLogin error",error)
    }
  }else{
    alert("Name and Password must be filled")
    console.log("Name and Password must be filled")
  }
 
}

  return (
    <div>
      <Login 
            name={name}
             password={password}
             setPassword={setPassword}
             setName={setName}
            handleLoginUser={handleLoginUser}
            />
    </div>
  )
}

export default Loginpage;
