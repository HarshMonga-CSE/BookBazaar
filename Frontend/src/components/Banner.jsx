import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Banner() {
  const navigate = useNavigate(); // Create a navigate function

  const handleGetStartedClick = () => {
    navigate('/login'); // Redirect to the login page
  };

  return ( 
    <>
      <div className="w-full flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36 px-4 py-3 md:px-20 ">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold">Welcome to <span className="text-blue-500">BookBazaar!</span></h1>
            <div className="space-y-8">
              <p className="text-2xl font-bold">Dive into a World of Stories and Knowledge</p>
              <p className="text-sm md:text-xl">At BookBazaar, we believe that every book has the power to transform, inspire, and entertain. Whether you're searching for your next favorite novel, a gripping thriller, or insightful non-fiction, you've come to the right place. Explore our extensive collection and let your next adventure begin!</p>
              
            </div>
          </div>
          <button 
            className="btn mt-16 btn-active btn-primary px-10 " 
            onClick={handleGetStartedClick} // Add onClick handler
          >
            Get Started
          </button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center md:justify-start">
          <img 
            src="/Banner.jpg" 
            className="w-full md:w-[1000px] h-auto md:h-[460px] object-cover md:ml-12" 
            alt="Banner" 
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
