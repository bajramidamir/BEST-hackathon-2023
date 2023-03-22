import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase';

const Hero = () => {

    const userSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    return (
        <div className='px-16 pb-16'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                <img src="assets/smart-home-hero.svg" className='mb-8 md:mb-0 w-64 md:w-4/5' />   
                <div className='flex items-center mx-auto'>
                    <div className='mx-auto'>
                        <p className='text-5xl md:text-7xl text-emerald-600 mb-4 text-center font-semibold'>GreenHouse</p>
                        <p className='text-center text-4xl mb-4'>Green homes for a greener Earth.</p>
                        <div className='flex justify-center mb-10 md:mb-16'>
                            <button type="button" onClick={userSignIn} className="px-3 flex items-center py-2 hover:shadow-sm hover:bg-blue-600 hover:text-white transition duration-300 ease-linear text-center bg-gray-100 shadow-2xl rounded-lg ">
                                <img src="assets/socials-icons/google.svg" className='w-12 px-2' alt="" />
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='px-4 md:px-64'>
                <p className='text-xl md:text-2xl text-center py-4'>
                    GreenHouse is designed to help you monitor and control your home as well as your energy usage, 
                    reduce your carbon footprint, and save money on your utility bills.
                </p>
                <p className='text-xl md:text-2xl text-center py-4'>
                    With its intuitive interface 
                    and powerful features,
                    the GreenHouse app makes it easy to live a 
                    more sustainable lifestyle and contribute to a greener earth.
                </p>
                    
            
            </div>
            
        </div>
    )
}

export default Hero;