import React from 'react'

const Hero = () => {
  return (
    <div className='px-16 grid grid-cols-2'>  
          <img src="assets/smart-home-hero.svg" className='w-4/5' />   
          <div className='flex items-center mx-auto'>
            <div className='mx-auto'>
              <p className='text-center text-4xl my-4'>Green homes for a greener Earth.</p>
              <button type="button" class="text-gray-700 px-3 py-2 text-center bg-gray-100 border shadow-lg rounded-lg ">
                  Sign in with Google
              </button>
            </div>
          </div>   
        </div>
  )
}

export default Hero