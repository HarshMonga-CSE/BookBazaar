import React from "react";
import { useLocation } from "react-router-dom";
import PaymentForm from "../components/PaymentForm"; // Adjust the path if necessary

const Checkout = () => {
  const location = useLocation();
  const price = location.state?.price || 0; // Default to 0 if no price is provided

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative w-full max-w-3xl p-8  dark:bg-slate-800 dark:text-white bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center mb-6">Checkout</h1>
        <div className="w-full max-w-lg mx-auto">
          <PaymentForm price={price} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
