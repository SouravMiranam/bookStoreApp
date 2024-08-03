import React from "react";
import Footer from "../components/Footer";
import Course from "../components/Course";
import Navbar from "../components/Navbar";

function Courses() {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Course></Course>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Courses;
