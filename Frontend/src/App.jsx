import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Abouts from "./about/Abouts";
import Checkout from "./components/Checkout";
import SearchResults from "./components/SearchResults";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider"; // Ensure this is correctly implemented

function App() {
  const [authUser] = useAuth(); // Assuming useAuth returns an array with user info

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/book"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<SearchResults />} />
        {/* Redirect from unknown routes to home or a 404 page */}
        <Route path="*" element={<Navigate to="/signup" />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
