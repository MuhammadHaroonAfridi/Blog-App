import React from "react";
import Navbar from "../components/Navbar";
import NewPost from "../components/NewPost";
import PopularPost from "../components/PopularPost";
import TopPost from "../components/TopPost";
import Card from "../components/Card";



export default function Home() {
  return (
    <>
      <Navbar />
     {/* <MainImages/> */}

     <div className=" container mt-5">
      <div className=" row">
        <div className="col-md-4 col-lg-4 col-sm-6 co-12">
          <Card/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 co-12">
          <Card/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 co-12">
          <Card/>
        </div>
      </div>
     </div>
 
    </>
  );
}
