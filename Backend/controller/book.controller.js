import Book from "../model/book.model.js";
export const getBook = async (req, res) => {
  try {
    const searchQuery = req.query.search; // Capture the search query from the URL
    let books;

    if (searchQuery) {
      // If a search query exists, filter books based on the title
      books = await Book.find({
        name: { $regex: searchQuery, $options: "i" }, // Case-insensitive search
      });
    } else {
      // If no search query, return all books
      books = await Book.find();
    }

    res.status(200).json(books);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
