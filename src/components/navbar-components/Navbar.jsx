import React, { useState } from "react";
import techhireImage from "../../images/techhire.jpg";
import SearchBar from "./SearchBar";
import LogInModal from "./LogInModal";
import SignupModal from "./SignUpModal";
import "../../css/Navbar-css/navbar.css";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowSignupModal = () => {
    setShowSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    setShowSignupModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          {/* Use the techhireImage */}
          <img src={techhireImage} alt="TechHire" width="150" />
        </a>
        <div className="navbar-collapse justify-content-center">
          <SearchBar />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* Hamburger menu icon */}
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/Home">
                Discover
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/JobSeekers">
                For job seekers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Companies">
                For companies
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-primary btn-sm me-2"
              type="button"
              onClick={handleShowLoginModal}
            >
              Log In
            </button>
            <button
              className="btn btn-outline-primary btn-sm"
              type="button"
              onClick={handleShowSignupModal}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Modals for Login and Signup */}
      <LogInModal show={showLoginModal} handleClose={handleCloseLoginModal} />
      <SignupModal show={showSignupModal} handleClose={handleCloseSignupModal} />
    </nav>
  );
};

export default Navbar;
