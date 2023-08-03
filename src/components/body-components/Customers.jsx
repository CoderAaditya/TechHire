import React from "react";
import "../../css/Body-css/customers.css"

const Customers = () => {
  const imageUrls = [
    "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287437a7e6343_Vector.svg",
    "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d712874df97e6332_Vector-5.svg",
    "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d71287f1797e6321_Vector-4.svg",
    "https://assets-global.website-files.com/636dd759d7128716627e62a9/636dd759d7128746107e6310_Vector-3.svg"
  ];

  // Repeat the imageUrls array to create 16 images in total
  const repeatedImageUrls = imageUrls.concat(imageUrls, imageUrls, imageUrls);

  return (
    <div id="customers" className="customers section">
      <div className="container text-center">
        <div className="row text-center">
          <h2>More than 10,000 top companies</h2>
          <div className="logos col-xs-12 text-center grid-container">
            {repeatedImageUrls.map((imageUrl, index) => (
              <div className="grid-item" key={index}>
                <img
                  src={imageUrl}
                  alt={`Logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
