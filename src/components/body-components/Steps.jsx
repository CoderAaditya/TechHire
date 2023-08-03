import React from "react";
import "../../css/Body-css/steps.css";

const Steps = () => {
  return (
    <div className="steps-container">
      <div className="container">
        <div className="col-md-10 col-xs-12 col-md-offset-1 steps">
          {/* Step 1 */}
          <div className="row step-container">
            <div className="col-sm-8 col-xs-12 step-left">
              <h5>5X higher response from companies</h5>
              <p>Tired of having your applications ignored by companies? TechHire only matches you with the right jobs, leading to 5X response rates from companies compared to other job sites!</p>
            </div>
            <div className="col-sm-4 col-xs-12 step-right text-center">
              <img src="https://static.instahyre.com/images/icons/response.webp" alt="Step 1" />
            </div>
          </div>

          {/* Step 2 */}
          <div className="row step-container">
            <div className="col-sm-8 col-xs-12 step-left">
              <h5>Your perfect job, delivered to you</h5>
              <p>Do you really want to look at thousands of irrelevant job postings or get spammed by job sites? At TechHire, we do the work of finding the best jobs for you, so you can sit back and relax.</p>
            </div>
            <div className="col-sm-4 col-xs-12 step-right text-center">
              <img src="https://static.instahyre.com/images/icons/target.webp" alt="Step 2" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="row step-container">
            <div className="col-sm-8 col-xs-12 step-left">
              <h5>Privacy guaranteed</h5>
              <p>We value your privacy very highly. You can block specific companies from viewing your profile. Or you can block all companies and just apply to specific ones yourself.</p>
            </div>
            <div className="col-sm-4 col-xs-12 step-right text-center">
              <img src="https://static.instahyre.com/images/icons/privacy.webp" alt="Step 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
