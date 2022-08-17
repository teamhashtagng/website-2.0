import React from 'react'
import Hero from '../components/sections/Contact/Hero'
import LayoutDefault from '../layouts/LayoutDefault'
import ContactDetail from '../components/sections/Contact/ContactDetail'
import ContactIllustration from '../components/sections/Contact/ContactIllustration'

const ContactUs = () => {
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