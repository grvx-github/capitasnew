import React from "react";
import "./about.css";

const about = () => {
  return (
    <div className="aboutSection pt-5">
      <div className="container-fluid">
        <div className="row">
          <div className=" row col-lg-6 col-md-12 mx-2">
            <div className="aboutContent">
              <h2>Capitas</h2>
              <p>
                Capitas is a specialized international real estate and
                investment advisory firm that works with a select network of
                private and institutional capital partners in the areas of real
                estate acquisition, development management, asset management
                advisory, and strategic cross border transactions.
              </p>
              <p>
                Led by a senior management team with over 70 years of
                experience, and 7 independent financial and real estate
                platforms launched in the Americas and MENA region, Capitas
                carries a reputation for successful execution, innovative
                solutions, and return driven results.
              </p>
              <div className="statement">
                <div class="teamEx">
                  <h4>
                    70+ <span>YEARS</span>
                  </h4>
                  <p>COMBINED TEAM EXPERIENCE</p>
                </div>
              </div>
              <div className="aboutCounter">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="counter-card mt-4">
                      <h3>
                        {12} <span>years of</span>
                      </h3>
                      <p> Company Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="counter-card mt-4">
                      <h3>
                        {70}
                        <span>years of</span>
                      </h3>
                      <p>Combined Team Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="counter-card mt-4">
                      <h3>
                        $ {2} <span>Billion in</span>
                      </h3>
                      <p>Business Transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-lg-6 col-md-12">
            <div className="aboutImg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
