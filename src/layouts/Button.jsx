import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick} // Added onClick here
        className="px-6 py-1 border-2 border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white transition-all rounded-full"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
