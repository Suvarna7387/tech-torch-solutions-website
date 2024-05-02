import React from "react";
import { useState, useEffect } from "react";
import "./Range.css";

const Range = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 15) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="range-container">
      <div className="range-item">
        <div className="count">{count}</div>
        <div className="label">Happy Customers</div>
      </div>
      <div className="range-item">
        <div className="count">30 +</div>
        <div className="label">Successful Projects</div>
      </div>
      <div className="range-item">
        <div className="count">97 %</div>
        <div className="label">Client Retention</div>
      </div>
      <div className="range-item">
        <div className="count">20 +</div>
        <div className="label">Workshops Conducted</div>
      </div>
    </div>
  );
};

export default Range;
