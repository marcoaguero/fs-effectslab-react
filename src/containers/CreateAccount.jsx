import React from "react";
import hero from "../assets/thank-you.jpg";
import { useState } from "react";

const CreateAccount = () => {
  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const bgStyle = { backgroundColor: "rgba(255, 255, 255, 0.75)" };
  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get("email");
  const accountId = searchParams.get("accountId");
  console.log(email + " " + accountId);
  const [password, setPassword] = useState("");
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the password to the server
    const response = await fetch("http://localhost:3001/api/create-account", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accountId, email, password }),
    });

    if (response.ok) {
      // Password successfully added
      setShowThankYouMessage(true);
    } else {
      // Handle error here
    }
  };

  return (
    <section className="py-5 flex-grow-1" style={heroStyle}>
      {!showThankYouMessage && (
        <form
          className="m-auto col col-md-6 container p-4 px-lg-5 my-5 rounded "
          style={bgStyle}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              readOnly
              disabled={email !== null}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
      {showThankYouMessage && (
        <div className="text-center text-white container px-4 px-lg-5 my-5">
          <h1 className="display-4 fw-bolder">
            <p>Thanks for registering!</p>
          </h1>
        </div>
      )}
    </section>
  );
};

export default CreateAccount;
