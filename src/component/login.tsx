import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import api from "../services/api";
import { MyContext } from "../context/Context";
import "./css/login.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { setLoggedIn } = useContext(MyContext);
  const { setClosepopup } = useContext(MyContext);
  const { setUnitoken } = useContext(MyContext);

  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

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

  const clearloginform = () => {
    setMobile("");
    setPassword("");
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

  const clearsignupform = () => {
    setS_Mobile("");
    setS_Password("");
    setname("")
    setS_C_Password("")
  };

  // Login function
  const handleLogin = async () => {
    if (mobile.length < 10) {
      return;
    }

    try {
      const response = await axios.post(api + "/login", {
        mobile,
        password,
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);
      setUnitoken(token);
      setLoggedIn(true); // Update login state
      navigate("/dashboard");
    } catch (error: any) {
      setError(error.response.data.message);
      clearloginform()
    }
  };

  // Signup function
  const handleSignup = async () => {
    if (
      S_mobile.length < 10 ||
      S_password !== S_C_password ||
      S_password.length < 6
    ) {
      return;
    }
    try {
      const response = await axios.post(api + "/user-register", {
        name,
        S_mobile,
        S_password,
      });
      const data = response.data;
      setSuccess(data.message);
      clearsignupform()
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (S_mobile.length < 10) {
      setError("Enter valid mobile Number");
      return;
    } else if (S_password.length < 6) {
      setError("Password have atlest 6 character");
      return;
    }
    if (S_password !== S_C_password) {
      setError("Password not match");
      return;
    }
    setError("");
  };

  const handleSwitchForm = () => {
    setError("");
    setSuccess("")
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-wrapper">
      {token ? (
        setClosepopup(true)
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
              <button
                onClick={handleLogin}
                type="submit"
                className="submit-button"
              >
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
              {error
                ? error && <p className="error-message">{error}</p>
                : success && <p className="success-message">{success}</p>}
              <button
                onClick={handleSignup}
                type="submit"
                className="submit-button"
              >
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
