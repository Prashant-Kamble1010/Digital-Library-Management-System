import { useState } from "react";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Basic validation
        if (username === "" || password === "") {
            setError("Username and Password are required");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError("");
        alert("Login Successful!");
    };

    return (
        <div className="login-container">
            <h2>Digital Library Login</h2>

            <form onSubmit={handleLogin}>

                {/* Username */}
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {/* Error Message */}
                {error && <p>{error}</p>}

                {/* Login Button */}
                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    );
}

export default Login;