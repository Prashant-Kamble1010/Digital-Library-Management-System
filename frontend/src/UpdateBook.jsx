import { useState } from "react";
import "./UpdateBook.css";
import { validateBook } from "./bookValidation";

function UpdateBook() {
    const [title, setTitle] = useState("Java Programming");
    const [author, setAuthor] = useState("James Gosling");
    const [category, setCategory] = useState("Programming");
    const [message, setMessage] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();

        const result = validateBook(title, author, category);
        if (result !== "Book is valid") {
            setMessage(result);
            return;
        }

        setMessage("Book details updated successfully!");
    };

    return (
        <div className="update-container">

            <h2>Edit Book Details</h2>

            <form onSubmit={handleUpdate}>

                {/* Book Title */}
                <div>
                    <label htmlFor="update-title">Book Title</label>
                    <input
                        id="update-title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Author */}
                <div>
                    <label htmlFor="update-author">Author</label>
                    <input
                        id="update-author"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="update-category">Category</label>
                    <select
                        id="update-category"
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

                {/* Save Changes */}
                <button type="submit">
                    Save Changes
                </button>

                {/* Success / Error Message */}
                {message && <p role="status">{message}</p>}

            </form>

        </div>
    );
}

export default UpdateBook;