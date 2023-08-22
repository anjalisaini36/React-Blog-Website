import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../helper";
import moment from "moment";

function FullDetailBlogPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState({});

  console.log("findBloggggggggggg", slug);

  const getBlog = async () => {
    try {
      const result = await getSingleBlog(slug);
      setBlog(result.data);
      console.log("result:", result);
    } catch (error) {
      console.log("single blog error", error);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="card-body mt-4">
              <img src={blog.file} alt="" height={500} width={1070} />
              <h3 className="card-title">{blog.title}</h3>
              <p className="fw-bold">by <span className="spanClass">{blog.name}</span></p>
              <p className="fw-bold">{moment(blog.date).format('MMMM Do YYYY, h:mm:ss a')}</p>
              <p className="card-text">{blog.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullDetailBlogPage;
