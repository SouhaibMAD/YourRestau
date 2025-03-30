import React, { useState } from "react";

const Modal = ({ isOpen, closeModal }) => {
  const [dishName, setDishName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [additionalMessage, setAdditionalMessage] = useState(""); // Nouveau champ pour les commentaires

  const handleSubmit = (e) => {
    e.preventDefault();

    // Créer le message WhatsApp avec les informations et le commentaire supplémentaire
    const orderMessage = `Dish: ${dishName}\nQuantity: ${quantity}\nPhone: ${phoneNumber}\nAdditional Message: ${additionalMessage}`;

    // URL de l'API WhatsApp avec le numéro de téléphone
    const whatsappURL = `https://wa.me/212610065949?text=${encodeURIComponent(orderMessage)}`;

    // Ouvrir WhatsApp avec le message pré-rempli
    window.open(whatsappURL, "_blank");

    closeModal(); // Fermer le modal après la soumission
  };

  // Fonction pour fermer le modal si l'utilisateur clique à l'extérieur du formulaire
  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick} // Écoute le clic sur l'arrière-plan
    >
      <div className="bg-white p-5 rounded-lg w-96" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl mb-4">Place Your Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2">Dish Name</label>
            <input
              type="text"
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2">Additional Message</label>
            <textarea
              value={additionalMessage}
              onChange={(e) => setAdditionalMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Add any additional comments here"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Submit Order
          </button>
        </form>
        <button
          onClick={closeModal}
          className="mt-4 text-red-500 w-full py-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
