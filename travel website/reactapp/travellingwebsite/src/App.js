import React, { useRef, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import Swiper from "swiper";
import "swiper/css";

import "./static/index.css";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ServiceContainer from "./components/ServiceContainer";
import DestinationContainer from "./components/DestinationContainer";
import TripContainer from "./components/TripContainer";
import ClientContainer from "./components/ClientContainer";
import Footer from "./components/Footer";
import About from "./components/Company/About";

const App = () => {
  const homeRef = useRef(null);
  const serviceRef = useRef(null);
  const destinationRef = useRef(null);
  const tripRef = useRef(null);
  const clientRef = useRef(null);

  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 800,
    };

    // === ScrollReveal sections ===
    ScrollReveal().reveal(".header__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".header__content .section__subheader", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".header__content h1", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".header__content p", {
      ...scrollRevealOption,
      delay: 1500,
    });
    ScrollReveal().reveal(".header__btns", {
      ...scrollRevealOption,
      delay: 2000,
    });

    ScrollReveal().reveal(".service__card", {
      duration: 1000,
      interval: 500,
    });

    ScrollReveal().reveal(".destination__card", {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal(".trip__image img", {
      ...scrollRevealOption,
      origin: "right",
    });
    ScrollReveal().reveal(".trip__content .section__subheader", {
      ...scrollRevealOption,
      delay: 500,
    });
    ScrollReveal().reveal(".trip__content .section__header", {
      ...scrollRevealOption,
      delay: 1000,
    });
    ScrollReveal().reveal(".trip__list li", {
      ...scrollRevealOption,
      delay: 1500,
      interval: 500,
    });

    ScrollReveal().reveal(".client__content .section__subheader", {
      ...scrollRevealOption,
    });
    ScrollReveal().reveal(".client__content .section__header", {
      ...scrollRevealOption,
      delay: 500,
    });

    // === Swiper ===
    new Swiper(".swiper", {
      direction: "vertical",
      autoHeight: true,
      slidesPerView: 1,
    });
  }, []);

  return (
    <Router>
      <Nav
        homeRef={homeRef}
        serviceRef={serviceRef}
        destinationRef={destinationRef}
        tripRef={tripRef}
        clientRef={clientRef}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header ref={homeRef} />
              <ServiceContainer ref={serviceRef} />
              <DestinationContainer ref={destinationRef} />
              <TripContainer ref={tripRef} />
              <ClientContainer ref={clientRef} />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
