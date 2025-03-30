import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // For routing
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import Socials from './Socials';

const Footer = () => {
  const navigate = useNavigate(); // For navigation
  const location = useLocation(); // To get the current page URL

  const handleNavigation = (section) => {
    // If on the homepage, just scroll to the section
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      // If not on the homepage, navigate to the homepage
      navigate("/"); // This will navigate to the homepage without reloading the page
      setTimeout(() => {
        scrollToSection(section); // After the homepage loads, scroll to the section
      }, 500); // Delay to allow for page load
    }
  };

  // Helper function to scroll to the section
  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5 gap-8">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">YourRestau</h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for culinary excellence.
          </p>
        </div>
        
        <div className="flex-1">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            {/* Update links to trigger scroll after navigation */}
            <button
              onClick={() => handleNavigation('about')}
              className="hover:text-brightColor transition-all cursor-pointer text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('review')}
              className="hover:text-brightColor transition-all cursor-pointer text-left"
            >
              Reviews
            </button>
          </nav>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            {/* ScrollLink for in-page scrolling to "dishes" */}
            <button
              onClick={() => handleNavigation('dishes')}
              className="hover:text-brightColor transition-all cursor-pointer text-left"
            >
              Dishes
            </button>

            {/* Menu Button: Scroll to menu if on the homepage */}
            <button
              onClick={() => handleNavigation('menu')}
              className="hover:text-brightColor transition-all cursor-pointer text-left"
            >
              Menu
            </button>
          </nav>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:FoodieWeb@email.com"
            >
              FoodieWeb@email.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:+64958248966"
            >
              +64 958 248 966
            </a>
            <Socials />
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          @copyright developed by
          <span className="text-brightColor"> Souhaib MADHOUR</span> |
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
