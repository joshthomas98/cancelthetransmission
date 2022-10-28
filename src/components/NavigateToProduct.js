import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function NavigateToProduct() {
  const navigate = useNavigate();

  const NavigateProduct = () => {
    navigate("/product");
  };

  return (
    <div>
      <Button onClick={NavigateProduct}>View product</Button>
    </div>
  );
}
