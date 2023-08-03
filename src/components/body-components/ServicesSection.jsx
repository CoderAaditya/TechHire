import React from 'react';
import "../../css/Body-css/servicesection.css"
const ServicesSection = () => {
  return (
    <div className="services-section text-center" id="services">
      {/* Services section (small) with icons */}
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-12">
            <div className="services">
              <div className="row">
                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="services-icon">
                    <img
                      src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png"
                      height="60"
                      width="60"
                      alt="Service"
                    />
                  </div>
                  <div className="services-description">
                    <h4>Step 1: Complete Profile</h4>
                    <p>
                      Once you are approved, we showcase you to leading Indian technology startups
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="services-icon">
                    <img
                      src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png"
                      height="60"
                      width="60"
                      alt="Service"
                    />
                  </div>
                  <div className="services-description">
                    <h4>Step 2: Receive Job Offers</h4>
                    <p>
                      Companies start sending interview requests. Talk to only the ones you like.
                    </p>
                  </div>
                </div>
                <div className="col-sm-4 wow fadeInUp" data-wow-delay="0.4s">
                  <div className="services-icon">
                    <img
                      src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png"
                      height="60"
                      width="60"
                      alt="Service"
                    />
                  </div>
                  <div className="services-description">
                    <h4>Step 3: Accept Dream Job</h4>
                    <p>
                      Compare your offers and accept the best one. Hired!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
