import React from "react";
import { Button } from "react-bootstrap";

const CheckoutPage = () => {
  return (
    <div>
      <div className="container">
        <div className="text-right mt-4">
          <Button>Back to cart</Button>
        </div>

        <h3 className="text-light text-center mb-5">You're almost there...</h3>
      </div>

      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h3 className="text-light mt-4">Contact Information</h3>

            <h5 className="text-light mt-4">First name</h5>
            <input
              className="mt-2 text-light pl-2"
              title="First name"
              type="text"
              placeholder="Enter your first name"
            />

            <h5 className="text-light mt-4">Surname</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Surname"
              type="text"
              placeholder="Enter your surname"
            />

            <h5 className="text-light mt-4">Email</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Email"
              type="text"
              placeholder="Enter your email"
            />

            <h5 className="text-light mt-4">Phone number (optional)</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Email"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="col">
            <h3 className="text-light mt-4">Shipping</h3>

            <h5 className="text-light mt-4">Address</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Address"
              type="text"
              placeholder="Address"
            />

            <h5 className="text-light mt-4">Town/City</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Town/City"
              type="text"
              placeholder="Town/City"
            />

            <h5 className="text-light mt-4">Postcode</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Postcode"
              type="text"
              placeholder="Postcode"
            />

            <h5 className="text-light mt-4">Country</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Country"
              type="text"
              placeholder="Country"
            />
          </div>

          <div className="col">
            <h3 className="text-light mt-4">Payment</h3>

            <h5 className="text-light mt-4">Address</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Address"
              type="text"
              placeholder="Address"
            />

            <h5 className="text-light mt-4">Town/City</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Town/City"
              type="text"
              placeholder="Town/City"
            />

            <h5 className="text-light mt-4">Postcode</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Postcode"
              type="text"
              placeholder="Postcode"
            />

            <h5 className="text-light mt-4">Country</h5>
            <input
              className="mt-2 text-light pl-2"
              title="Country"
              type="text"
              placeholder="Country"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
