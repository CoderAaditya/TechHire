import React, { useEffect, useState } from "react";
import "../../css/Body-css/intro.css";
import techteam from "../../images/techteam.jpg";

const Intro = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="container intro-container"
      style={{
        backgroundImage: `url(${techteam})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`intro-content app-intro-content text-center ${
          showContent ? "show" : ""
        }`}
      >
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            <h1 style={{ color: "#000", fontWeight: "bold" }}>
              Find your next top tech
              <br className="d-block d-md-none" /> job in 1 week.
            </h1>
            <p className="p-size" style={{ color: "#000", fontWeight: "bold" }}>
              <span className="yellow-highlight">Are you a top 2%</span>{" "}
              Software Engineer, Product Manager, or Data Scientist?
              <br className="d-none d-md-block" />
              Let leading Indian technology{" "}
              <span className="yellow-highlight">
                companies compete to hire you.
              </span>
            </p>
            <a
              className="btn btn-primary btn-lg"
              style={{ marginTop: "20px" }}
              href="/candidate/signup"
            >
              Apply to join
            </a>
            <div
              className="text-muted"
              style={{
                marginTop: "10px",
                fontSize: "larger",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              100% free. It takes only 5 minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
