import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BookCard from "./BookCard";
// import { Query } from "mongoose";
function SearchResults() {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:4050/book?search=${query}`) // Corrected template literal
        .then((response) => {
          console.log(`http://localhost:4050/book?search=${query}`);
          if (Array.isArray(response.data)) {
            setBooks(response.data);
          } else {
            console.error("Expected an array but got:", response.data);
            setBooks([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
          setBooks([]);
        });
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <div className="search-results-page bg-white text-black">
      <h1>Search Results for "{query}"</h1>
      {Array.isArray(books) && books.length > 0 ? (
        <ul className="book-list">
          {books.map((book) => (
            <li key={book._id}>
              <BookCard
                item={book}
                handleBuyNowClick={() => handleBuyNowClick(book)}
                isFree={book.price === 0}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No books found matching your search.</p>
      )}
    </div>
  );
}

export default SearchResults;
