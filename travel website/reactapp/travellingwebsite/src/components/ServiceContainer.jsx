import React, { forwardRef } from "react";
import weather from "../assets/weather.png";
import plane from "../assets/plane.png";
import event from "../assets/event.png";
import customisation from "../assets/customisation.png";

const ServiceContainer = forwardRef((props,ref) => {
  return (
    <div>
      <section ref={ref} class="section__container service__container" id="service">
        <h3 class="section__subheader">CATEGORY</h3>
        <h2 class="section__header">We Offer Best Services</h2>
        <div class="service__grid">
          <div class="service__card">
            <img src={weather} alt="service" />
            <h4>Calculated Weather</h4>
            <p>
              Stay ahead of your travels with precise weather forecasts tailored
              to your destination's conditions.
            </p>
          </div>
          <div class="service__card">
            <img src={plane} alt="service" />
            <h4>Best Mode of travel </h4>
            <p>
              Get the most suitable modes of travel according to your budget and
              comfort.
            </p>
          </div>
          <div class="service__card">
            <img src={event} alt="service" />
            <h4>Local Events</h4>
            <p>
              Immerse yourself in the pulse of your destination with insights
              into local events and happenings within travel.
            </p>
          </div>
          <div class="service__card">
            <img src={customisation} alt="service" />
            <h4>Customizations</h4>
            <p>
              Tailor your journey with personalized customizations, ensuring
              every detail reflects your unique travel style.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});

export default ServiceContainer;
