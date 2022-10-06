import React, { useEffect } from 'react'
import Hero from '../components/sections/not-found/Hero'
import LayoutDefault from '../layouts/LayoutDefault'
import AOS from "aos";
import "aos/dist/aos.css";

const NotFound = () => {

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
          <Hero/>
        </div>
    </LayoutDefault>
  )
}

export default NotFound