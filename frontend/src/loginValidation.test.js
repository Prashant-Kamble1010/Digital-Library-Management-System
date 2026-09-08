import { describe, test, expect } from "vitest";
import { validateLogin } from "./loginValidation";

describe("Login Validation", () => {

    test("valid username and password", () => {
        expect(
            validateLogin("admin", "123456")
        ).toBe("Login successful");
    });

    test("empty username", () => {
        expect(
            validateLogin("", "123456")
        ).toBe("Username is required");
    });

    test("short password", () => {
        expect(
            validateLogin("admin", "123")
        ).toBe("Password must be at least 6 characters");
    });

});