import React from "react";
import techhireImage from "../../images/techhire.jpg";
import "../../css/Footer-css/externallinks.css";

const ExternalLinks = () => {
  return (
    <div className="footer-container">
      <footer id="myFooter">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h2 className="logo">
                <img
                  className=""
                  src={techhireImage}
                  alt="TopHire Logo"
                />
              </h2>
              <div className="mission">
                TechHire is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.
              </div>
              <div className="social-networks">
                <a
                  className="twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="facebook"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  className="instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-2">
              <h5>Candidates</h5>
              <ul>
                <li>
                  <a
                    className="link-primary"
                  >
                    For Candidates
                  </a>
                </li>
                <li>
                  <a
                    className="link-primary"
                  >
                    Candidate Sign Up
                  </a>
                </li>
                <li>
                  <a
                    className="link-primary"
                  >
                    Invite & Earn ₹15k
                  </a>
                </li>
                <li>
                  <a
                    className="link-primary"
                  >
                    Candidate FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Employers</h5>
              <ul>
                <li>
                  <a
                    className="link-primary"
                  >
                    For Employers
                  </a>
                </li>
                <li>
                  <a
                    className="link-primary"
                  >
                    Employer Sign Up
                  </a>
                </li>
                <li>
                  <a
                    className="link-primary"
                  >
                    Employer FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Company</h5>
              <ul>
                <li>
                  <a
                    className="link-primary"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="link-primary"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Partners</h5>
              <div>
                <a
                  className="twitter"
                >
                  <img
                    style={{ height: '45px' }}
                    src="https://d383au3bye3rv1.cloudfront.net/static/images/landing/codechef-directi-for-lp.png"
                    alt="TopHire Logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExternalLinks;
