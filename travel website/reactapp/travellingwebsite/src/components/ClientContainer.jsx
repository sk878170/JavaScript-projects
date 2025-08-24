import React, { forwardRef } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Pagination, Autoplay } from "swiper/modules";



const ClientContainer = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="section__container client__container" id="client">
      <div className="client__content">
        <h3 className="section__subheader">TESTIMONIALS</h3>
        <h2 className="section__header">What People Say About Us</h2>
      </div>

      <Swiper 
        direction="vertical"
        autoHeight={true}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[ Pagination, Autoplay]}
        className="swiper-slide"
      >
        <SwiperSlide>
          <div className="client__card">
            <div className="client__card__content">
              <p>
                Booking my trips through this platform has been a game-changer!
                From the intuitive interface to the seamless booking process,
                I've never felt more excited to explore new destinations.
              </p>
              <h4>Emily Watson</h4>
              <h5>Travel Enthusiast</h5>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="client__card">
            <div className="client__card__content">
              <p>
                As a busy professional, time is of the essence. This website
                made planning my vacation a breeze, allowing me to focus on what
                matters most: making memories with my family.
              </p>
              <h4>David Nguyen</h4>
              <h5>Business Executive</h5>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="client__card">
            <div className="client__card__content">
              <p>
                I've been using this service for years, and it never
                disappoints. The convenience of booking my flights,
                accommodations, and activities all in one place saves me time
                and stress every trip.
              </p>
              <h4>Michael Johnson</h4>
              <h5>Frequent Flyer</h5>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
});

export default ClientContainer;
