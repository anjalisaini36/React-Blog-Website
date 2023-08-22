import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function NewBlog(props) {
  const{title,summary,setTitle,setSummary,handleBlog,setFile,file,content,setContent}=props;  

console.log("props for blog", props)
  return (
    <div>
      <div className="newblog">
        <h1>Create New Blog</h1>
        <div className="mt-4 mb-4 ">
          <input
            className="p-2 form-control"
            type="title"
            placeholder="Title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-4">
          <input
            className="p-2 form-control"
            type="summary"
            placeholder="Summary"
            value={summary}
            onChange={(e)=>{setSummary(e.target.value)}}
          />
        </div>
        <input className="mb-4 form-control" type="text" placeholder="image URL" value={file} onChange={(e)=>{setFile(e.target.value)}} />

        {/* <input className="mb-4 form-control" type="file" onChange={handleImage} /> */}
        {/* <ReactQuill value={content} onChange={(e)=>{setContent(e.target.value)}}/> */}
        <button className="mt-4 form-control btn btn-secondary" type="submit" onClick={()=>{handleBlog()}}>
          Create Blog
        </button>
      </div>
    </div>
  );
}

export default NewBlog;
