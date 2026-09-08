export function validateBook(title, author, category) {

    if (!title) {
        return "Book title is required";
    }

    if (!author) {
        return "Author is required";
    }

    if (!category) {
        return "Category is required";
    }

    return "Book is valid";
}