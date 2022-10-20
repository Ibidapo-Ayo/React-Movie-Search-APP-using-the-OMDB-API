import React from "react";
import Navbar from "./Navbar";
import RawMovie from "./RawMovie";
import Search from "./Search";
import "./assets/boxicons/css/boxicons.css";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <RawMovie />
      <Search />
      <Footer />
    </div>
  );
}

export default Home;
