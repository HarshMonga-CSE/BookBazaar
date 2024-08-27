import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const form = e.target;
    if (form.checkValidity()) {
      // Show the popup message
      setShowPopup(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
        navigate("/");
      }, 2000);

      // Optionally, you can clear the form fields here if needed
      form.reset();
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center p-6 md: pt-20">
      <div className="relative w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Close Cross Button */}
        <Link
          to="/"
          className="absolute top-4 right-4 text-3xl text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 transition duration-200"
          aria-label="Back to Home"
        >
          ✕
        </Link>
        <div className="p-8">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900 dark:text-white">
            Contact Us
            <span className="block h-1 mt-2 w-24 bg-blue-500 mx-auto"></span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            We would love to hear from you! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    required
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Text your message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-col items-start p-6 bg-gray-200 dark:bg-gray-700 rounded-md">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Address:</strong> C-1/59 Yamuna Vihar, Delhi-110053,
                  India
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Phone:</strong> +91 8920293632
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:harshmonga64@gmail.com"
                    className="text-blue-500 hover:underline"
                  >
                    harshmonga64@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="bg-white dark:bg-white-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 dark:bg-white dark:text-black">
              Thank you for your feedback!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
