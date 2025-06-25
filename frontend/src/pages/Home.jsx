import React from "react";
import CustomNavbar from "../components/Navbar";
import { Carousel } from "react-bootstrap";
import NewPost from "../components/NewPost";
import PopularPost from "../components/PopularPost";
import TopPost from "../components/TopPost";
import MainImages from "../components/MainImages";

export default function Home() {
  return (
    <>
      <CustomNavbar />
     <MainImages/>
      {/* Popular Posts Section */}
      <PopularPost />
      {/* animation! */}
      <div className="animated-bg">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <NewPost />
      <TopPost/>
    </>
  );
}
