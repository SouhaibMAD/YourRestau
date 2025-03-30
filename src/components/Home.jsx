import React, { useState } from "react";
import Button from "../layouts/Button";
import Modal from "./Modal"; // Import Modal component

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/px.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="text-backgroundColor">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis et qui,
          maxime assumenda repellat corrupti officia dolorum delectus labore
          deleniti?
        </p>
        <div className="lg:pl-44">
          <Button title="Order Now" onClick={openModal} />
        </div>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default Home;
