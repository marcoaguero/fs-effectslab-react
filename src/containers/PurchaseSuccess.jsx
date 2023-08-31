import React from "react";
import hero from "../assets/thank-you.jpg";
import { useEffect, useState } from "react";
import Button from "../components/Button";

const PurchaseSuccess = () => {
  const [email, setEmail] = useState("");
  const [accountId, setAccountId] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const orderId = searchParams.get("orderId");

    if (orderId) {
      // Update the URL to use port 3001
      fetch(`http://localhost:3001/api/get-email/${orderId}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.email) {
            setEmail(data.email);
            setAccountId(data.userId);
            console.log(`Email for orderId ${orderId}: ${data.email}`);
            console.log(data);
          } else {
            console.log(`No email found for orderId ${orderId}`);
          }
        })
        .catch((error) => {
          console.log("User already in the system");
        });
    } else {
      console.log("no orderId");
    }
  }, []);

  const heroStyle = {
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section className="py-5 flex-grow-1" style={heroStyle}>
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">
            <p> Thanks for your purchase and...</p>{" "}
            <p>...make sure to ROCK on!</p>
          </h1>
          {email && (
            <div className="card text-dark bg-light mb-3 col col-md-6 m-auto">
              <div className="card-body">
                <h4 className="card-title">Account creation</h4>
                <p className="card-text">
                  Would you like to create an account with the email: {email}?
                </p>
                <Button
                  link={`/create-account?accountId=${accountId}&email=${email}`}
                  title="Create account"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
export default PurchaseSuccess;
