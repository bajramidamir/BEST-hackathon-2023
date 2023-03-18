import React from 'react';

const Hero = () => {
  return (
    <div className='px-16 pb-16'>
        <div className='grid gap-4 grid-cols-2'>
            <img src="assets/smart-home-hero.svg" className='w-4/5' />   
            <div className='flex items-center mx-auto'>
                <div className='mx-auto'>
                    <p className='text-7xl text-emerald-600 mb-4 text-center font-semibold'>GreenHouse</p>
                    <p className='text-center text-4xl mb-4'>Green homes for a greener Earth.</p>
                    <div className='flex justify-center'>
                        <button type="button" class="px-3 flex items-center py-2 hover:shadow-sm hover:bg-blue-400 transition duration-300 ease-linear text-center bg-gray-100 shadow-2xl rounded-lg ">
                            <img src="assets/socials-icons/google.svg" className='w-12 px-2' alt="" />
                            Sign in with Google
                        </button>
                    </div>
                        
                </div>
            </div>
        </div>
        
        <div className='bg-[url("assets\blob-haikei.svg")] px-64'>
            <p className='text-xl text-center py-4'>
                GreenHouse is designed to help you monitor and control your home as well as your energy usage, 
                reduce your carbon footprint, and save money on your utility bills.
            </p>
            <p className='text-xl text-center py-4'>
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