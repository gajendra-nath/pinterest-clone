import React from "react";
import { Link } from "react-router-dom";

const PinCard = ({ pin }) => {
  return (
    <div className="bg-white overflow-hidden shadow rounded-2xl relative group cursor-pointer hover:shadow-lg transition-all duration-300">
      <img
        src={pin.image.url}
        alt={pin.title || "Pin"}
        className="w-full h-auto object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
        <div className="flex flex-col justify-center items-center gap-2">
          <Link
            to={`/pin/${pin._id}`}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
          >
            View Pin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PinCard;
