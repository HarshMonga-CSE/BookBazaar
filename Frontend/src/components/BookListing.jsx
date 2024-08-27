import React from "react";
import { useNavigate } from "react-router-dom";

const BookListing = ({ book }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/checkout", { state: { price: book.price } });
  };

  return (
    <div className="book-item">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p>Price: ${book.price.toFixed(2)}</p>
      <button
        onClick={handleBuyNow}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Buy Now
      </button>
    </div>
  );
};

export default BookListing;
