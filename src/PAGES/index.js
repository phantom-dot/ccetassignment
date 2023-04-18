import React from "react";
import Section1 from "../components/section1/section1";
import Branches from "../components/branches/branches";
import Footer from "../components/footer/footer";
import NavBar from "../components/Navbar/nav";
const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <div>
        <Section1></Section1>
        <Branches></Branches>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
