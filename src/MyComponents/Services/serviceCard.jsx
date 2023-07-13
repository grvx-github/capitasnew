import React from "react";
import { Col } from "react-bootstrap";

export const ServiceCard = (props) => {
  return (
    <Col xs={12} md={4} lg={3}>
      <div className="serviceCard">
        <div className="serviceCardItems">
          <div className="serviceCardIcon">{props.icon}</div>
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <div className="content">
            <p>{props.content}</p>
          </div>
          <div className="vmBtn">
            <button class="btn2">
              <a href="">READ MORE</a>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default ServiceCard;

<div class="renewal-items">
  <div class="renewal-icon">
    <i class="flaticon-house"></i>
  </div>
  <div class="title">
    <h3>
      <a href="#">Best renovation</a>
    </h3>
  </div>
  <div class="content">
    <p>Claritas etiam processus dynamicus, qui sequitur mutationem.</p>
  </div>
  <div class="renewal-btn">
    <a href="#" class="fresh-btn">
      Read more
    </a>
  </div>
</div>;
