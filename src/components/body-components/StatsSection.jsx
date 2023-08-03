import React, { useState, useEffect, useRef } from "react";
import "../../css/Body-css/statssection.css";

const StatsSection = () => {
  const [counter, setCounter] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < 6000000 ? prevCounter + 2500 : 6000000
      );
    }, 1);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="section-stats">
      <div className="container w-container">
        <div className="cols stats-cols">
          <div className="col col-33 border-right">
            <div className="stat blue">
              <div className="headline-2 mb-8">130K +</div>
              <div className="headline-4">Tech Jobs</div>
            </div>
          </div>
          <div className="col col-33 border-right">
            <div className="stat orange center-stat">
              <div className="headline-2 mb-8">
                <div
                  className="counterup"
                  data-countup="6,000,000"
                  ref={targetRef}
                >
                  {counter}
                </div>
              </div>
              <div className="headline-4">Matches Made</div>
            </div>
          </div>
          <div className="col col-33">
            <div className="stat green">
              <div className="headline-2 mb-8">
                <div>8M +</div>
              </div>
              <div className="headline-4">Startup-ready candidates</div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-between-sections" /> 
    </div>
  );
};

export default StatsSection;
