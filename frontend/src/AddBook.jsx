import { useState } from "react";
import "./AddBook.css";

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !author || !category) {
            setMessage("Please fill all fields");
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
                    <label>Book Title</label>
                    <input
                        type="text"
                        placeholder="Enter book title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Author */}
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        placeholder="Enter author name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                {/* Category */}
                <div>
                    <label>Category</label>
                    <select
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
                {message && <p>{message}</p>}

                {/* Save Button */}
                <button type="submit">
                    Save Book
                </button>

            </form>
        </div>
    );
}

export default AddBook;