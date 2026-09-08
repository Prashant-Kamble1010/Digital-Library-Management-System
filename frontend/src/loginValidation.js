export function validateLogin(username, password) {

    if (!username) {
        return "Username is required";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }

    return "Login successful";
}