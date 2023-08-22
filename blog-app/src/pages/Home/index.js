import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Post from "../../data/Post";
import Home from "../../component/Home";
import { deleteBlog, getBlog } from "../../helper";
import { useParams } from "react-router-dom";

function HomePage() {
  const { id } = useParams("");
  console.log("deleted id", id);
  const [blogData, setBlogData] = useState([]);

  const handleBlog = async () => {
    try {
      const result = await getBlog({ name: "name" });
      console.log("result", result);
      if (result) {
        if (result.status === "ok") {
          setBlogData(result.data);
        } else {
          alert(result.message);
        }
      }
    } catch (error) {
      console.log("handleblog error", error);
    }
  };
  useEffect(() => {
    handleBlog();
  }, []);

  const handleDelete = async (_id) => {
    alert("You want to delete this blog")
    try {
      const result = await deleteBlog(_id);
      console.log("resulttttttttttttttttt:", result);
    } catch (error) {
      console.log("blog deletion error", error);
    }
  };

  return (
    <div>
      <Header />
      <Home blogData={blogData} handleDelete={handleDelete} />

      {/* <Post /> */}
    </div>
  );
}

export default HomePage;
