import React, { useEffect } from "react";
import Hero from "../components/sections/services/Hero";
import LayoutDefault from "../layouts/LayoutDefault";
import AOS from "aos";
import "aos/dist/aos.css";
import CTA from "../components/sections/services/CtaSection";

const Services = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 3000,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <LayoutDefault>
      <div style={{ marginTop: "100px" }}>
        <Hero />
        <CTA />
      </div>
    </LayoutDefault>
  );
};

export default Services;
