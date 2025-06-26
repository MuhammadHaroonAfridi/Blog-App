import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";



export default function Home() {
  return (
    <>
<Navbar/>
     <div className=" container mt-5">
      <div className=" row">
        <div className="col-md-4 col-lg-4 col-sm-6 co-12">
          <Card title={"haroon Blog"}/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 co-12">
          
          <Card title={"Amjid Blog"}/>
        </div>
        <div className="col-md-4 col-lg-4 col-sm-6 co-12">
          <Card title={"Shkair Blog"}/>
        </div>
      </div>
     </div>

     {/*  */}

 
    </>
  );
}
