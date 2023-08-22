import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../component/Header";
import Loginpage from "../pages/login";
import Registerpage from "../pages/register";
import NewBlogPage from "../pages/New Blog";
import FullDetailBlogPage from "../pages/FullDetailBlog";
import UpdateBlogPage from "../pages/Update Blog";

function Routing() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/newblog" element={<NewBlogPage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/:slug" element={<FullDetailBlogPage />} />
          <Route path="/update/:id" element={<UpdateBlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;
