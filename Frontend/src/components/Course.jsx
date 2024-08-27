import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4050/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="w-full bg-gray-100 dark:bg-gray-900">
        {" "}
        {/* Full width background for light and dark mode */}
        <div className="mx-auto px-4 md:px-20">
          {" "}
          {/* Center content with padding */}
          <div className="mt-19 text-center">
            <br /> <br /> <br /> <br />
            <h1 className="text-2xl md:text-4xl text-gray-800 dark:text-white">
              Ready to Master New Skills? Start{" "}
              <span className="text-blue-500">Here! :)</span>
            </h1>
            <p className="mt-12 text-gray-800 dark:text-gray-300">
              At BookBazaar, we believe in the power of knowledge to transform
              lives. Our carefully curated selection of courses is designed to
              help you acquire new skills, deepen your understanding, and
              achieve your goals. Whether you're looking to advance your career,
              explore a new passion, or simply learn something new, you'll find
              the perfect course here. Dive into our collection of paid books,
              each offering expert insights and practical knowledge to guide you
              on your learning journey. Start mastering new skills today and
              unlock your potential!
            </p>
            <Link to="/">
              <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
                Back
              </button>
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            {book.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
