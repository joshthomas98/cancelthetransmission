import React, { useEffect, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CartContext } from "./CartContext";

const SERVER_BASE_URL = "http://localhost:8000";
const CLIENT_BASE_URL = "http://localhost:3000";

const UsingFetch = () => {
  const [products, setProducts] = useState([]);
  const url = SERVER_BASE_URL + "/product/";
  const page_url = CLIENT_BASE_URL + "/product/";

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(products.id);

  console.log(cart.items);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="text-light">
      <h1 className="text-center mt-4">STORE</h1>
      <h3 className="text-center">
        Official Cancel The Transmission Merchandise
      </h3>
      {products.length > 0 && (
        <div className="p-5">
          <div className="container">
            <div className="row">
              {products.map((product) => (
                <div className="col mb-4">
                  <Card style={{ width: "24rem" }}>
                    <Card.Img
                      variant="top"
                      src={SERVER_BASE_URL + product.productImage}
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="text-center">
                        £{product.price}
                      </Card.Text>
                      <div className="text-center">
                        <Button
                          className="mt-2 mb-2"
                          href={page_url + product.id}
                        >
                          View Product
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsingFetch;
