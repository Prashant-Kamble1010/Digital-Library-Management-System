import { useState } from "react";
import "./AddBook.css";
import { validateBook } from "./bookValidation";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = validateBook(title, author, category);
        if (result !== "Book is valid") {
            setMessage(result);
            return;
        }

        setMessage("Book added successfully!");

        // Clear form
        setTitle("");
        setAuthor("");
        setCategory("");
    };

    return (
        <div className="book-container">

            <h2>Add New Book</h2>

            <form onSubmit={handleSubmit}>

                {/* Book Title */}
                <div>
                    <label htmlFor="book-title">Book Title</label>
                    <input
                        id="book-title"
                        type="text"
                        placeholder="Enter book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Author */}
                <div>
                    <label htmlFor="book-author">Author</label>
                    <input
                        id="book-author"
                        type="text"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="book-category">Category</label>
                    <select
                        id="book-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="Programming">Programming</option>
                        <option value="Science">Science</option>
                        <option value="History">History</option>
                        <option value="Fiction">Fiction</option>
                    </select>
                </div>

                {/* Message */}
                {message && <p role="status">{message}</p>}

                {/* Save Button */}
                <button type="submit">
                    Save Book
                </button>

            </form>
        </div>
    );
}

export default AddBook;