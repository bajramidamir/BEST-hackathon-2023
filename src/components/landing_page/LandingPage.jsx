import React from 'react';
import Hero from './Hero';
import Footer from "./Footer"
import LandingPageHeader from './LandingPageHeader';


const LandingPage = () => {
  return (
    <div>
        <LandingPageHeader />
        <Hero />
        <Footer />
    </div>
  )
}

export default LandingPage;