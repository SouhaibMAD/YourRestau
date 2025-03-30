import React, { useState } from "react"; 
import { Link as ScrollLink } from "react-scroll"; // For scrolling
import { Link as RouterLink, useNavigate } from "react-router-dom"; // For routing
import { BiRestaurant } from "react-icons/bi";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import Modal from "./Modal"; // Import Modal component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate(); // For programmatic navigation

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  // Helper function for smooth scrolling to section
  const handleScrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation behavior
  const handleNavigation = (section) => {
    // Navigate to the homepage
    navigate("/");

    // After navigation, scroll to the target section
    setTimeout(() => {
      handleScrollToSection(section);
    }, 500); // Delay the scroll action to ensure the page has loaded
  };

  // Reload page when logo is clicked
  const handleLogoClick = () => {
    window.location.reload(); // This will reload the page
  };

  return (
    <div className="fixed w-full bg-white shadow-md z-50">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer" onClick={handleLogoClick}> {/* Add onClick here */}
            <BiRestaurant size={32} />
            <h1 className="text-xl font-semibold">YourRestau</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            {/* External Page Links */}
            <RouterLink to="/" className="hover:text-brightColor transition-all cursor-pointer" onClick={() => handleNavigation('home')}>
              Home
            </RouterLink>
            <button
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => handleNavigation('about')}
            >
              About
            </button>
            <button
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => handleNavigation('review')}
            >
              Reviews
            </button>

            <div className="relative group">
              <div className="flex items-center gap-1">
                {/* Dishes with Scroll to section */}
                <button
                  onClick={() => handleNavigation('dishes')}
                  className="hover:text-brightColor transition-all cursor-pointer"
                >
                  Dishes
                </button>
                <BiChevronDown className="cursor-pointer" size={25} />
              </div>

              {/* Dropdown Menu */}
              <ul className="absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5">
                <li>
                  <RouterLink to="/dishes-type?type=spicy" className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                    Spicy
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/dishes-type?type=tasty" className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                    Tasty
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/dishes-type?type=delicious" className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                    Delicious
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/dishes-type?type=crispy" className="text-gray-800 hover:text-brightColor transition-all cursor-pointer">
                    Crispy
                  </RouterLink>
                </li>
              </ul>
            </div>

            {/* New "Menu" Section link */}
            <button
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => handleNavigation('menu')} // Scroll to the "menu" section
            >
              Menu
            </button>

            <Button title="Order Now" onClick={openModal} />
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? <AiOutlineClose size={25} onClick={handleChange} /> : <AiOutlineMenuUnfold size={25} onClick={handleChange} />}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-50`}>
          <RouterLink to="/" className="hover:text-brightColor transition-all cursor-pointer" onClick={() => { handleNavigation('home'); closeMenu(); }}>
            Home
          </RouterLink>
          <button
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={() => { handleNavigation('about'); closeMenu(); }}
          >
            About
          </button>
          <button
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={() => { handleNavigation('review'); closeMenu(); }}
          >
            Reviews
          </button>

          {/* Navigation to Dishes Section in Mobile Menu */}
          <button
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={() => { handleNavigation('dishes'); closeMenu(); }} // Scroll to dishes section and close the menu
          >
            Dishes
          </button>

          {/* Types de plats séparés */}
          <div className="space-y-9">
            <RouterLink to="/dishes-type?type=spicy" className="block hover:text-brightColor transition-all cursor-pointer" onClick={() => { closeMenu(); }}>
              Spicy
            </RouterLink>
            <RouterLink to="/dishes-type?type=tasty" className="block hover:text-brightColor transition-all cursor-pointer" onClick={() => { closeMenu(); }}>
              Tasty
            </RouterLink>
            <RouterLink to="/dishes-type?type=delicious" className="block hover:text-brightColor transition-all cursor-pointer" onClick={() => { closeMenu(); }}>
              Delicious
            </RouterLink>
            <RouterLink to="/dishes-type?type=crispy" className="block hover:text-brightColor transition-all cursor-pointer" onClick={() => { closeMenu(); }}>
              Crispy
            </RouterLink>
          </div>

          {/* Séparer la section "Menu" */}
          <div className="mt-0">
            <button
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { handleNavigation('menu'); closeMenu(); }} // Scroll to menu section and close the menu
            >
              Menu
            </button>
          </div>

          <Button title="Order Now" onClick={() => { openModal(); closeMenu(); }} />
        </div>
      </div>
      {/* Modal Component */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Navbar;
