import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./portfolio.css";
import PortfolioData from "../../portfoliodata";
import { sliderSettings } from "../../common";


const Portfolio = () => {
  // useEffect(() => {
  //   new Swiper(".swiper-container", {
  //     // Customize Swiper options here
  //     slidesPerView: "auto",
  //     spaceBetween: 20,
  //   });
  // }, []);

  return (
    <div className="p-wrapper">
      <h2>Our Portfolio</h2>
      <div className="container-fluid">
        <div className="row">
          <Swiper {...sliderSettings}>
            {PortfolioData.map((card, index) => {
							return (
                <SwiperSlide key={index}>
                  <div className="p-card col-lg-4 col-sm-12">
                    <div className="card">
                      <div className="card-img-top">
                        <img src={card.img} alt="" />
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">{card.title}</h4>
                        <p className="card-text">{card.text}</p>
                        <a href="#">See more</a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
							
						}
              
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
