import { useState } from "react";
import "./UpdateBook.css";

function UpdateBook() {
    const [title, setTitle] = useState("Java Programming");
    const [author, setAuthor] = useState("James Gosling");
    const [category, setCategory] = useState("Programming");
    const [message, setMessage] = useState("");

    const handleUpdate = (e) => {
        e.preventDefault();

        if (!title || !author || !category) {
            setMessage("Please fill all fields");
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
                    <label>Book Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Author */}
                <div>
                    <label>Author</label>
                    <input
                        type="text"
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

                {/* Save Changes */}
                <button type="submit">
                    Save Changes
                </button>

                {/* Success / Error Message */}
                {message && <p>{message}</p>}

            </form>

        </div>
    );
}

export default UpdateBook;