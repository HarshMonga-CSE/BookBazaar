import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            Ready to Master New Skills? Start{" "}
            <span className="text-blue-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            At BookBazaar, we believe in the power of knowledge to transform
            lives. Our carefully curated selection of courses is designed to
            help you acquire new skills, deepen your understanding, and achieve
            your goals. Whether you're looking to advance your career, explore a
            new passion, or simply learn something new, you'll find the perfect
            course here. Dive into our collection of paid books, each offering
            expert insights and practical knowledge to guide you on your
            learning journey. Start mastering new skills today and unlock your
            potential!
          </p>
          <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
