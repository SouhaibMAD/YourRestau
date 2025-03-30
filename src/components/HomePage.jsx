import React from "react";
import Home from "../components/Home";
import Dishes from "../components/Dishes";
import About from "../components/About";
import Review from "../components/Review";

const HomePage = () => {
  return (
    <main>
      <div id="home">
        <Home />
      </div>

      <div id="dishes">
        <Dishes />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="review">
        <Review />
      </div>
    </main>
  );
};

export default HomePage;
