import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleBuyNowClick = () => {
    navigate("/checkout", { state: { book: item } });
  };

  // Check if the book's category is 'free'
  const isFree = item.category && item.category.toLowerCase() === "free";

  return (
    <div className="mt-8 my-3 p-">
      <div className="card bg-base-100 w-full max-w-sm h-[600px] shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border dark:shadow-lg">
        <figure className="h-2/3">
          <img
            src={item.image}
            alt={item.name} // Improved alt text
            className="object-cover w-full h-full"
            style={{ objectFit: "cover" }} // Ensure image fits well
          />
        </figure>
        <div className="card-body h-1/3 flex flex-col justify-between">
          <h2 className="card-title flex justify-between items-center">
            {item.name}
            <div className="badge badge-primary dark:badge-secondary">
              {item.category}
            </div>
          </h2>
          <p className="text-sm">{item.title}</p>
          <div className="card-actions flex justify-between items-center mt-auto h-[200px]">
            <div className="badge badge-outline dark:text-white">
              Rs {item.price}
            </div>

            {/* Conditionally render the 'Buy Now' button */}
            {!isFree && (
              <button
                onClick={handleBuyNowClick}
                className="cursor-pointer px-4 py-2 rounded-full border-[2px] bg-blue-400 text-white hover:bg-blue-700 hover:text-white duration-200"
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
