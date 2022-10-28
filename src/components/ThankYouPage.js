import React from "react";
import { Button } from "react-bootstrap";

const ThankYouPage = () => {
  return (
    <div>
      <div id="thankyoufont" className="text-light text-center mt-5">
        Thank you!
      </div>

      <div className="text-light text-center lead p-5">
        <p>Your oder has been confirmed and is on it's way!</p>
      </div>

      <div className="text-light text-center lead">
        <p>
          Why not sign up for our <span className="text-warning">monthly</span>{" "}
          newsletter?
        </p>
        <p>Enter your email below to sign up!</p>

        <input
          className="text-center text-light mt-3 mb-4"
          type="text"
          placeholder="Enter your email here"
        />

        <div className="mb-5">
          <Button>Sign me up!</Button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
