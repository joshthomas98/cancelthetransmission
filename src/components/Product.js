import React, { useEffect, useState, useContext } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import SizeDropdown from "./SizeDropdown";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";

const SERVER_BASE_URL = "http://localhost:8000";

//let productId = 24 // this variable needs to be set by getting the id passed into this page from the store page

const Product = () => {
  const { id } = useParams();

  // Call API passing in ID
  const [product, setProduct] = useState([]);
  const url = SERVER_BASE_URL + "/product/" + id;

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  console.log(cart.items);

  // console.log(url);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        //console.log(data);
      });
  }, []);

  const SizeMenu = () => {
    if (product.isSize === true) {
      return <SizeDropdown />;
    } else {
      return "";
    }
  };

  // Then populate page with values from API
  return (
    <section className="p-5 text-light">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid w-75"
              src={SERVER_BASE_URL + product.productImage}
              alt=""
            />
            {console.log(product.productImage)}
          </div>

          <div className="col">
            <h2>{product.name}</h2>
            <p className="mb-5">£{product.price}</p>

            <div>{SizeMenu()}</div>

            <section className="mt-3">
              {productQuantity > 0 ? (
                <>
                  <Form as={Row}>
                    <Form.Label column="true" sm="6">
                      In Cart: {productQuantity}
                    </Form.Label>
                    <Col sm="6">
                      <Button
                        sm="6"
                        onClick={() => cart.addOneToCart(product.id)}
                        className="mx-2"
                      >
                        +
                      </Button>
                      <Button
                        sm="6"
                        onClick={() => cart.removeOneFromCart(product.id)}
                        className="mx-2"
                      >
                        -
                      </Button>
                    </Col>
                  </Form>
                  <Button
                    variant="danger"
                    onClick={() => cart.deleteFromCart(product.id)}
                    className="my-2"
                  >
                    Remove from cart
                  </Button>
                </>
              ) : (
                <Button
                  variant="primary"
                  onClick={() => cart.addOneToCart(product.id)}
                >
                  Add To Cart
                </Button>
              )}
            </section>

            <section>
              <Button className="mt-3 mb-4" variant="secondary">
                Buy now
              </Button>
            </section>

            <p className="mt-5">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
