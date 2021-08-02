import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

function SignInForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitt, setSubmitt] = useState(false);
  const [otp, setOTP] = useState("");
  // const [token, setToken] = useState({});
  const [valid, setValid] = useState(true);

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleOTP(e) {
    setOTP(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitt(true);
    const obj = {
      emailId: email,
      password: password,
    };
    // console.log(obj);

    await fetch("https://carret-website.herokuapp.com/api/auth/email", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async function otpClickHandler() {
    // console.log(otp);
    const objec = {
      emailId: email,
      password: password,
      oTp: otp,
    };
    // console.log(objec);
    const res = await fetch("https://carret-website.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify(objec),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    // console.log(data["token"]);
    // setValid(true);
    // props.tokenHandled(data);
    if (data["token"] !== null) {
      // console.log(data["token"]);
      setValid(true);
      props.tokenHandled(data);
    }
  }

  return (
    <div className="FormCenter">
      <form className="FormFields">
        {!submitt && (
          <>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="email">
                E-Mail Address
              </label>
              <input
                type="email"
                id="email"
                className="FormField__Input"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <div className="FormField">
              <button
                className="FormField__Button mr-20"
                onClick={handleSubmit}
              >
                Sign In
              </button>{" "}
              <Link to="/" className="FormField__Link">
                Create an account
              </Link>
            </div>
          </>
        )}
        {submitt && (
          <>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="code">
                Enter the OTP
              </label>
              <input
                type="phone"
                id="otp"
                className="FormField__Input"
                placeholder="Enter OTP"
                name="otp"
                value={otp}
                onChange={handleOTP}
                autoComplete="off"
                required={true}
              />
            </div>
            <div className="FormField">
              {valid && (
                <NavLink to="/portfolio">
                  <button
                    className="FormField__Button mr-20"
                    onClick={otpClickHandler}
                  >
                    Verify
                  </button>
                </NavLink>
              )}
              {!valid && (
                <button
                  className="FormField__Button mr-20"
                  onClick={otpClickHandler}
                >
                  Verify
                </button>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default SignInForm;
