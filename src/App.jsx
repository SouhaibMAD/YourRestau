import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import Reviews from "./components/Review";
import DishesType from "./components/DishesType"; // Import the new page

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home Page with Scrolling Sections */}
        <Route
          path="/"
          element={
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
              <div id="menu">
                <Menu />
              </div>
              <div id="review">
                <Reviews />
              </div>
            </main>
          }
        />

        {/* Separate Page for DishesType */}
        
        <Route path="/dishes-type" element={<DishesType />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
