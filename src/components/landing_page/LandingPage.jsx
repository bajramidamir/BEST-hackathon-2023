import React from 'react';
import Hero from './Hero';
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <div>
        <div className='mb-6'>
            <img src="assets/waves.svg"  />
        </div>
       
        <Hero />
        <Footer />

    </div>
  )
}

export default LandingPage;