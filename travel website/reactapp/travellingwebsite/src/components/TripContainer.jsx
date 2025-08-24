import React, { forwardRef } from 'react'
import trip from '../assets/trip.png'

const TripContainer = forwardRef((props,ref) => {
  return (
    <div>
      <section ref={ref} class="section__container trip__container" id="trip">
      <div class="trip__image">
        <img src={trip} alt="trip" />
      </div>
      <div class="trip__content">
        <h3 class="section__subheader">EASY & FAST</h3>
        <h2 class="section__header">Book Your Next Trip In 3 Easy Steps</h2>
        <ul class="trip__list">
          <li>
            <span><i class="ri-signpost-line"></i></span>
            <div>
              <h4>Choose Destination</h4>
              <p>
                Choose your dream destination from our curated selection of
                exotic locales, bustling cities, and serene getaways.
              </p>
            </div>
          </li>
          <li>
            <span><i class="ri-secure-payment-line"></i></span>
            <div>
              <h4>Make Payment</h4>
              <p>
                Secure your adventure with ease through our streamlined payment
                process, ensuring a hassle-free booking experience.
              </p>
            </div>
          </li>
          <li>
            <span><i class="ri-flight-takeoff-line"></i></span>
            <div>
              <h4>Reach Airport on Selected Date</h4>
              <p>
                Prepare for takeoff as you finalize your travel plans, arriving
                at the airport on your selected date ready to embark on your
                next unforgettable journey.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </div>
  )
});

export default TripContainer
