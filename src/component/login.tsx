import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import api from "../services/api";
import { MyContext } from "../context/Context";
import './css/login.css'

function LoginForm() {
  const { setLoggedIn } = useContext(MyContext);
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  //login form
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  // signup form

  const [S_mobile, setS_Mobile] = useState("");
  const [S_password, setS_Password] = useState("");
  const [S_C_password, setS_C_Password] = useState("");
  const [name, setname] = useState("");

  // check for token
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setLoggedIn(true);

      setToken(storedToken);
    }
  }, []);

  // for login  form
  const handlePhoneChange = (event: any) => {
    setMobile(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  // for sign up form
  const handleNameChange = (event: any) => {
    setname(event.target.value);
  };
  const handleS_PhoneChange = (event: any) => {
    setS_Mobile(event.target.value);
  };
  const handleS_PasswordChange = (event: any) => {
    setS_Password(event.target.value);
  };
  const handleS_C_PasswordChange = (event: any) => {
    setS_C_Password(event.target.value);
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
          {isLogin ? (
            <form onSubmit={handleSubmit} className="formm">
              <div>
                <input
                  type="text"
                  id="mobile"
                  value={mobile}
                  onChange={handlePhoneChange}
                  required
                  placeholder="Phone"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Password"
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button onClick={handleLogin} type="submit" className="submit-button">
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="formm">
               <div>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="mobile"
                  value={S_mobile}
                  onChange={handleS_PhoneChange}
                  required
                  placeholder="Phone"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={S_password}
                  onChange={handleS_PasswordChange}
                  required
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  value={S_C_password}
                  onChange={handleS_C_PasswordChange}
                  required
                  placeholder="Confirm Password"
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button onClick={handleLogin} type="submit" className="submit-button">
                {isLogin ? "Login" : "Signup"}
              </button>
            </form>
          )}
          <p>
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button onClick={handleSwitchForm} className="form-switch">
              {isLogin ? "Signup" : "Login"}
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default LoginForm;
