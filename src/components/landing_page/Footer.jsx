import React from 'react'

const Footer = () => {
  return (
    <div className='min-w-screen flex justify-center bg-emerald-400'>
        <div className='w-96'>
            <div className='grid grid-cols-3 gap-3 justify-items-center'>
                <a href="#"><img className="h-12" src="/public/assets/socials-icons/github.svg" alt="" /></a>
                <a href="#"><img className="h-12" src="/public/assets/socials-icons/instagram.svg" alt="" /></a>
                <a href="#"><img className="h-12" src="/public/assets/socials-icons/linkedin.svg" alt="" /></a>
            </div>
            <div className='grid grid-flow-row-dense grid-cols-6 grid-rows-2 justify-items-center'>
                <a className='col-span-2' href="#">Info</a>
                <a className='col-span-2' href="#">Support</a>
                <a className='col-span-2' href="#">Marketing</a>
                <a className='col-span-2' href="#">Terms of Use</a>
                <a className='col-span-4' href="#">Privacy Policy</a>
            </div>
        </div>
    </div>
  )
}

export default Footer