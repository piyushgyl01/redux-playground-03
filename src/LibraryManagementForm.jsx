import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBook, removeBook } from "./actions";

export default function LibraryManagementForm() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBookData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddBook = () => {
    if (bookData.title && bookData.author && bookData.isbn) {
      dispatch(addBook(bookData));

      setBookData({
        title: "",
        author: "",
        isbn: "",
      });
    }
  };

  return (
    <>
      <h2>Library Management</h2>
      <input
        type="text"
        placeholder="Title"
        id="title"
        value={bookData.title}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        placeholder="Author"
        id="author"
        value={bookData.author}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="text"
        placeholder="ISBN"
        id="isbn"
        value={bookData.isbn}
        onChange={handleInputChange}
      />
      <br />
      <button onClick={handleAddBook}>Add Book</button>
      <h3>Library Summary</h3>
      <h4>Total Books: {books.length}</h4>
      <ul>
        {books.map((boook) => (
          <li key={boook.isbn}>
            {boook.title} by {boook.author}: {boook.isbn}
            <button onClick={() => dispatch(removeBook(boook.isbn))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
