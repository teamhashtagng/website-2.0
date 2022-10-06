import React, { useEffect } from 'react'
import Hero from '../components/sections/contactsec/Hero'
import LayoutDefault from '../layouts/LayoutDefault'
import ContactDetail from '../components/sections/contactsec/ContactDetail'
import ContactIllustration from '../components/sections/contactsec/ContactIllustration'
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
            <Hero/>
            <ContactDetail/>
            <ContactIllustration/>
        </div>
        
    </LayoutDefault>
  )
}

export default ContactUs