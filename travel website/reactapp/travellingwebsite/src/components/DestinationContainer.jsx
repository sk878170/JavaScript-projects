import React, { forwardRef } from 'react'
import destination1 from '../assets/destination-1.jpg'
import destination2 from '../assets/destination-2.jpg'
import destination3 from '../assets/destination-3.jpg'

const DestinationContainer = forwardRef((props,ref) => {
  return (
    <div>
      <section ref={ref} class="section__container destination__container" id="destination">
      <h3 class="section__subheader">TOP SELLING</h3>
      <h2 class="section__header">Top Destinations</h2>
      <div class="destination__grid">
        <div class="destination__card">
          <img src={destination1} alt="destination" />
          <div class="destination__details">
            <div>
              <h4>Rome, Italy</h4>
              <h4>$5.42k</h4>
            </div>
            <p>
              <span><i class="bi bi-airplane"></i></span>
              10 Days Trip
            </p>
          </div>
        </div>
        <div class="destination__card">
          <img src={destination2} alt="destination" />
          <div class="destination__details">
            <div>
              <h4>London, UK</h4>
              <h4>$4.2k</h4>
            </div>
            <p>
              <span><i class="bi bi-airplane"></i></span>
              12 Days Trip
            </p>
          </div>
        </div>
        <div class="destination__card">
          <img src={destination3} alt="destination" />
          <div class="destination__details">
            <div>
              <h4>Full Europe</h4>
              <h4>$15k</h4>
            </div>
            <p>
              <span><i class="bi bi-airplane"></i></span>
              28 Days Trip
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
});

export default DestinationContainer
