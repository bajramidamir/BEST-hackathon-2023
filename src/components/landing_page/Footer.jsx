import React from 'react'

const Footer = () => {
  return (
    <div className='min-w-screen py-16 flex justify-center bg-emerald-400'>
        <div className='w-96'>
            <div className='grid grid-cols-3 gap-3 justify-items-center mb-3'>
                <a href="#"><img className="h-12 invert" src="/assets/socials-icons/github.svg" alt="" /></a>
                <a href="#"><img className="h-12 invert" src="/assets/socials-icons/instagram.svg" alt="" /></a>
                <a href="#"><img className="h-12 invert" src="/assets/socials-icons/linkedin.svg" alt="" /></a>
            </div>
            <div className='grid grid-flow-row-dense grid-cols-6 grid-rows-2 justify-items-center text-slate-200'>
                <a className='col-span-2 hover:text-white' href="#">Info</a>
                <a className='col-span-2 hover:text-white' href="#">Support</a>
                <a className='col-span-2 hover:text-white' href="#">Marketing</a>
                <a className='col-span-3 hover:text-white' href="#">Terms of Use</a>
                <a className='col-span-3 hover:text-white' href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer