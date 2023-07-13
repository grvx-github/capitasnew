import React, { useState } from "react";
import ServiceCard from "./serviceCard";
import cardDetails from "../../../src/services";
import "./services.css";

const Services = () => {
  const [cardState, setCardState] = useState(false);

  const handleMouseOver = () => {
    setCardState(true);
		console.log("hi")
  };

  const handleMouseOut = () => {
    setCardState(false);
  };

  return (
    <div className="servicesSection">
      <div className="container-fluid">
        <div className="serviceRow row">
          {cardDetails.map((entry, index) => (
            <ServiceCard
              key={index}
              icon={entry.icon}
              title={entry.title}
              content={entry.content}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{ backgroundColor: cardState ? "#0089e9" : "inherit" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
