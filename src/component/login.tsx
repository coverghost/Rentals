import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import api from "../services/api";
import { MyContext } from "../context/Context";

function LoginForm() {
  const { setLoggedIn } = useContext(MyContext);
  const [token, setToken] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // Check if a token exists in local storage or cookie
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setLoggedIn(true);
      // Set the token in the state
      setToken(storedToken);
    }
  }, []);

  const handlePhoneChange = (event: any) => {
    setMobile(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(api + "/login", {
        mobile,
        password,
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      setLoggedIn(true); // Update login state
    } catch (error) {
      console.error(error);
      setError("Invalid mobile or password");
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    setLoggedIn(false); // Update login state
  };
  

  const handleSignup = async () => {
    try {
      const response = await axios.post("/api/signup", {
        mobile,
        password,
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
    } catch (error) {
      console.error(error);
      setError("Signup failed");
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setError("");

    if (isLogin) {
      handleLogin();
    } else {
      handleSignup();
    }
  };

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-wrapper">
      {token ? (
        <div>
          <p>You are logged in</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div className="form-container">
          <h2>{isLogin ? "Login" : "Signup"}</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="mobile">Mobile:</label>
              <input
                type="text"
                id="mobile"
                value={mobile}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            {error && <p>{error}</p>}
            <button onClick={handleLogin} type="submit">
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={handleSwitchForm}>
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
