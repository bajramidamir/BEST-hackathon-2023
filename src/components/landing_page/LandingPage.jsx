import React from 'react';
import Hero from './Hero';
import Footer from "./Footer"
import LandingPageHeader from './LandingPageHeader';

// maksimalno razbijeni komponenti za vas uzitak
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