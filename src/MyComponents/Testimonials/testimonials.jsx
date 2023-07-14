import React from "react";
import testimonialData from "../../testimonialdata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial.css";

const testimonials = () => {
  return (
    <div className="t-wrapper">
      <h1>Success Stories</h1>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
					// type: 'progressbar'
        }}
				slidesPerView={1}
				loop={true}
				perslid
				// navigation={true}
        modules={[Pagination, Navigation]}
				className="mySwiper"
      >
        {testimonialData.map((entry, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="testimonial">
                <div className="personDetails">
                  <div className="personImg">
                    <img src={entry.img} alt="" />
                  </div>
                  <div className="person">
                    <h4>{entry.name}</h4>
                    <p>{entry.role}</p>
                  </div>
                </div>
                <div className="testi">
                  <p>{entry.testi}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default testimonials;
