import { useState } from "react";
import "./Login.css";
import { validateLogin } from "./loginValidation";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        const result = validateLogin(username, password);

        if (result === "Login successful") {
            setError("");
            setMessage(result);
        } else {
            setMessage("");
            setError(result);
        }
    };

    return (
        <div className="login-container">
            <h2>Digital Library Login</h2>

            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

                {error && <p role="alert" style={{ color: "red" }}>{error}</p>}
                {message && <p role="status" style={{ color: "green" }}>{message}</p>}

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
