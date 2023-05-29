import React, { useEffect, useState } from "react";
import axios from "axios";
import Books from "./components/books";
import "./App.css";

const API_URL = "http://127.0.0.1:3000/api/v1/books";

// always use async and await..
const getAPIData = async () => {
  try {
    const response = await axios.get(API_URL);
    const result = response.data;
    return result;
  } catch (error) {
    console.error("Error:", error);
    // Handle the error or return a default value
    return null;
  }
};

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <h1>All My Books</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
