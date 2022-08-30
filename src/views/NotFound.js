import React from 'react'
import Hero from '../components/sections/not-found/Hero'
import LayoutDefault from '../layouts/LayoutDefault'
import Illustration from '../components/sections/error404/Illustration'

const NotFound = () => {
  return (
    <LayoutDefault>
        <div style={{marginTop: "100px"}}>
          <Hero/>
        </div>
    </LayoutDefault>
  )
}

export default NotFound