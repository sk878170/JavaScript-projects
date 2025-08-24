import React from 'react'
import { Link } from 'react-router-dom'
import play from '../assets/google-play.jpg'
import app from '../assets/app-store.jpg'


const Footer = () => {
  return (
    <div>
       <footer class="footer">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
          </div>
          <p>
            Our platform is your passport to seamless adventures, offering a
            curated selection of destinations and a user-friendly booking
            experience.
          </p>
        </div>
        <div class="footer__col">
          <h4>Company</h4>
          <ul class="footer__links">
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/careers"}>Careers</Link></li>
            <li><Link to={"/mobile"}>Mobile</Link></li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Contact</h4>
          <ul class="footer__links">
            <li><Link to={"/help"}>Help/FAQ</Link></li>
            <li><Link to={"/press"}>Press</Link></li>
            <li><Link to={"/affiliates"}>Affiliates</Link></li>
          </ul>
        </div>
        <div class="footer__col">
          <ul class="footer__socials">
            <li><i class="bi bi-facebook"></i></li>
            <li><i class="bi bi-instagram"></i></li>
            <li><i class="bi bi-twitter-x"></i></li>
            <li><i class="bi bi-threads"></i></li>
          </ul>
          <h5>Discover our app</h5>
          <div class="footer__discover">
            <img src={play} alt="discover" />
            <img src={app} alt="discover" />
          </div>
        </div>
      </div>
      <div class="footer__bar">
        Copyright @ 2025. All rights reserved.
      </div>
    </footer>
    </div>
  )
}

export default Footer
