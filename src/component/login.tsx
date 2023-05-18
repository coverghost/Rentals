import React, { useState } from "react";
import "./css/login.css";

function LoginForm() {
  const [mobile, setmobile] = useState("");
  const [password, setPassword] = useState("");
  const [L_mobile, setL_mobile] = useState("");
  const [L_password, setL_Password] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [name, setname] = useState("");

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const handleL_PhoneChange = (event: any) => {
    setL_mobile(event.target.value);
  };
  const handleL_PasswordChange = (event: any) => {
    setL_Password(event.target.value);
  };

  const handlePhoneChange = (event: any) => {
    setmobile(event.target.value);
    if (event.target.value.length !== 10) {
      setError("Enter Valid mobile number");
    } else {
      setError("");
    }
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: any) => {
    // setrePassword(event.target.value);
    const { value } = event.target;
    setrePassword(value);

    if (value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleNameChange = (event: any) => {
    setname(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(
      `Phone: ${mobile}, Password: ${password}, consfirm pass:${rePassword}, Name:${name}, isLogin: ${isLogin}`
    );
    console.log(
      `Phone: ${L_mobile}, Password: ${L_password}, isLogin: ${isLogin}`
    );
  };

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <>
      <div className="form_wraper">
        <div className="form-container">
          <h2 className="heading">{isLogin ? "Login" : "Sign Up"}</h2>
          {isLogin ? (
            <form onSubmit={handleSubmit} className="form-group">
              <div className="form-group1">
                <input
                  type="phone"
                  id="phone"
                  value={L_mobile}
                  onChange={handleL_PhoneChange}
                  required
                  placeholder="Phone"
                />
                {error && <p className="error_msg">{error}</p>}
              </div>
              <div className="form-group1">
                <input
                  type="password"
                  id="password"
                  value={L_password}
                  onChange={handleL_PasswordChange}
                  required
                  placeholder="Password"
                />
              </div>
              <button className="login_signup_button" type="submit">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="form-group">
              <div className="form-group1">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  required
                  placeholder="Name"
                />
              </div>
              <div className="form-group1">
                <input
                  type="text"
                  id="phone"
                  value={mobile}
                  onChange={handlePhoneChange}
                  required
                  placeholder="Phone"
                />
                {error && (
                  <p className="error_msg">
                    {error === "Enter Valid mobile number" ? error : ""}
                  </p>
                )}
              </div>
              <div className="form-group1">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  placeholder="Password"
                />
              </div>
              <div className="form-group1">
                <input
                  type="password"
                  id="C_password"
                  value={rePassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  placeholder="Confirm Password"
                />
                {error && (
                  <p className="error_msg">
                    {error === "Passwords do not match" ? error : ""}
                  </p>
                )}
              </div>
              <button className="login_signup_button" type="submit">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
          )}
          <p>
            {isLogin ? "New to our site?" : "Already have an account? "}{" "}
            <button
              className="option_button "
              type="button"
              onClick={handleSwitchForm}
            >
              {isLogin ? "Sign-Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
