import React from "react";
import { Modal, Button } from "react-bootstrap";

const LoginModal = ({ show, handleClose }) => {
  const handleLogin = () => {
    console.log("Login button clicked!");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          {/* Add your login form content here */}
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
