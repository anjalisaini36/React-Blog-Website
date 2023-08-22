import React, { useEffect, useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from 'react-router-dom';
import { getSingleBlog, updateBlog } from '../../helper';

function UpdateBlogPage() {
    const{id}=useParams("")
    console.log("idddddd",id)
    const[update,setUpdate]=useState({});
    
console.log(update,"update query")

    const handleGetBlog=async()=>{
        try {
            const result = await getSingleBlog(id);

            setUpdate(result.data);
            console.log("result:", result);
          } catch (error) {
            console.log("single blog error", error);
          }
    }
    
    const handleUpdate=async()=>{
        try {
            const result = await updateBlog(id,update);
            console.log("result:", result);
          } catch (error) {
            console.log("update blog error", error);
          }
    }

    useEffect(()=>{
        handleGetBlog();
    },[]);
    

  return (
    <div>
    <div className="newblog">
      <h1>Create New Blog</h1>
      <div className="mt-4 mb-4 ">
        <input
          className="p-2 form-control"
          type="title"
          placeholder="Title"
          value={update.title}
         onChange={e=>setUpdate({...update, title:e.target.value})}
        />
      </div>
      <div className="mb-4">
        <input
          className="p-2 form-control"
          type="summary"
          placeholder="Summary"
          value={update.summary}
          onChange={e=>setUpdate({...update, summary:e.target.value})}
        />
      </div>
     
      <input className="mb-4 form-control" type="text" placeholder='image URL' value={update.file} onChange={e=>setUpdate({...update, file:e.target.value})}
 />
      {/* <ReactQuill /> */}
      <button className="mt-4 form-control btn btn-secondary" type="submit" onClick={()=>{handleUpdate()}}>
        Create Blog
      </button>
    </div>
  </div>
  )
}

export default UpdateBlogPage;
