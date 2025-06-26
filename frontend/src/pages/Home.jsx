import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from 'axios'
import BaseUrl from "../services/Api";
import {useNavigate} from 'react-router-dom'
// import Navbar from "../components/Navbar";

export default function Home() {
  const navigate=useNavigate()
  const [blog,setBlog]=useState([])
      console.log('data',blog)


  useEffect(()=>{
  GetBlogs()
  },[])

  const GetBlogs=async()=>{
    try {
      const res=await axios.get(`${BaseUrl}/api/blog/get`)
      const data=res.data
      setBlog(data.blogs)
      
    } catch (error) {
      console.log('blogs erro',error)
    }
  }
const handleBlog = (data) => {
  navigate('/singleblog', { state: data });
};

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mt-5">
        <div className="row">
         {blog && blog.map((blog)=>{
          return(
             <div className="col-md-4 col-lg-4 col-sm-6 co-12 " style={{cursor:"pointer"}} onClick={()=>handleBlog(blog)}>
            <Card
              title={blog.title}
              Desc={blog.Desc}
              Image={blog.Image}
               // ✅ Replace with your own image paths
            />
          </div>
          )
         })}
         
        </div>
      </div>
    </>
  );
}
//







