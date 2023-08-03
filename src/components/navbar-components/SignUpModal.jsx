import React from "react";
import { Modal, Button } from "react-bootstrap";

const SignupModal = ({ show, handleClose }) => {
  const handleSignup = () => {
    console.log("Signup button clicked!");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="signupName" />
          </div>
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="signupPassword"
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignupModal;
