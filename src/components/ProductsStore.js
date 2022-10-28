import React, { useEffect, useState } from "react";

const SERVER_BASE_URL = "http://localhost:8000";
const url = SERVER_BASE_URL + "/product/";

function FetchProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);
}

function getProductData(id) {
  let productData = FetchProducts.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { FetchProducts, getProductData };
