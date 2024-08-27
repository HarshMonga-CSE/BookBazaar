import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PaymentForm = ({ price }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    pinCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.cardNumber.length !== 15) {
      alert("Card number must be 15 digits.");
      return;
    }

    if (formData.cardCVC.length !== 3) {
      alert("CVC must be 3 digits.");
      return;
    }

    // Show the payment popup
    setShowPaymentPopup(true);

    // After 2 seconds, show the success popup and then redirect
    setTimeout(() => {
      setShowPaymentPopup(false);
      setShowSuccessPopup(true);

      // After 2 seconds, redirect to the home page
      setTimeout(() => {
        setShowSuccessPopup(false);
        navigate("/");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-6 dark:bg-slate-800 dark:text-white bg-white shadow-lg rounded-lg">
      <Link
        to="/"
        className="absolute top-4 right-4 text-3xl text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition duration-200"
        aria-label="Back to Home"
      >
        ✕
      </Link>
      <h2 className="text-xl font-bold text-center mb-4">
        Payment Information
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form Fields */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="block text-sm font-medium">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="city" className="block text-sm font-medium">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="pinCode" className="block text-sm font-medium">
            Pin Code
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            placeholder="Enter your pin code"
            value={formData.pinCode}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cardNumber" className="block text-sm font-medium">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Enter your card number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>

        <div className="flex space-x-4">
          <div className="w-full space-y-2">
            <label htmlFor="cardExpiry" className="block text-sm font-medium">
              Expiry Date
            </label>
            <input
              type="text"
              id="cardExpiry"
              name="cardExpiry"
              placeholder="MM/YY"
              value={formData.cardExpiry}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="cardCVC" className="block text-sm font-medium">
              CVC
            </label>
            <input
              type="text"
              id="cardCVC"
              name="cardCVC"
              placeholder="CVC"
              value={formData.cardCVC}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Pay Now
        </button>
      </form>

      {showPaymentPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              <img
                src="./Tick symbol.jpg"
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Payment Successful!
            </h2>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              <img
                src="./Tick symbol.jpg"
                alt="Tick"
                className="inline-block w-6 h-6 mr-2"
              />
              Course Purchased Successfully!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
