import { describe, test, expect } from "vitest";
import { validateBook } from "./bookValidation";

describe("Book Validation", () => {

    test("valid book details", () => {
        expect(
            validateBook(
                "Java Programming",
                "James Gosling",
                "Programming"
            )
        ).toBe("Book is valid");
    });

    test("empty book title", () => {
        expect(
            validateBook(
                "",
                "James Gosling",
                "Programming"
            )
        ).toBe("Book title is required");
    });

    test("empty author", () => {
        expect(
            validateBook(
                "Java Programming",
                "",
                "Programming"
            )
        ).toBe("Author is required");
    });

});