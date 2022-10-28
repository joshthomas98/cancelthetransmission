import { useState, useContext } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { CartContext } from "./CartContext";

const Navbar = () => {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img
              id="homepage-logo"
              src="/images/ctt_transparent.png"
              alt="CTT LOGO"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="bio" className="nav-link">
                  BIO
                </a>
              </li>
              <li className="nav-item">
                <a href="live" className="nav-link">
                  LIVE
                </a>
              </li>
              <li className="nav-item">
                <a href="music" className="nav-link">
                  MUSIC
                </a>
              </li>
              <li className="nav-item">
                <a href="media" className="nav-link">
                  MEDIA
                </a>
              </li>
              <li className="nav-item">
                <a href="store" className="nav-link">
                  STORE
                </a>
              </li>
              <li className="nav-item">
                <a href="contact" className="nav-link">
                  CONTACT
                </a>
              </li>
              <li className="nav-item">
                <a href="customersignup" className="nav-link">
                  NEW USER
                </a>
              </li>
              <li className="nav-item">
                <a href="signin" className="nav-link">
                  SIGN IN
                </a>
              </li>

              <h1>
                <a href="signin" className="bi bi-person text-light ml-3"></a>
              </h1>

              <Button className="bi bi-cart ml-5" onClick={handleShow}>
                ({productsCount} Items)
              </Button>

              <Modal
                className="bg-dark text-light"
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {productsCount > 0 ? (
                    <>
                      <p>Items in your cart:</p>

                      <h3></h3>

                      <Button className="mt-3" variant="success">
                        Checkout
                      </Button>
                    </>
                  ) : (
                    <h1>There are no items in your cart!</h1>
                  )}
                </Modal.Body>
              </Modal>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
