import React, { forwardRef } from 'react'
import header from '../assets/header.png'

const Header = forwardRef((props,ref) => {
  return (
    <div >
      <header ref={ref} class="section__container header__container" id="home">
      <div class="header__image">
        <img src={header} alt="header" />
      </div>
      <div class="header__content">
        <h3 class="section__subheader">BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1>Travel, enjoy and live a new and full life</h1>
        <p>
          It's an invitation to break free from the ordinary, immerse yourself
          in diverse cultures, and embrace the beauty of the world around you.
          Let every journey be a chapter in your story of living life to its
          fullest potential.
        </p>
        <div class="header__btns">
          <button class="btn">Find out more</button>
        </div>
      </div>
    </header>
    </div>
  
  )
});

export default Header
