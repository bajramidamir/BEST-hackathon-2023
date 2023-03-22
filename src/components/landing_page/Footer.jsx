import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-emerald-400'>
      <div className='mx-auto w-full container px-6 md:px-80'>
        <div className='grid grid-cols-3 md:px-32 py-8 text-slate-200'>
          <div className='text-center '>
            <button>
              <a href="#">
                <img src="assets/socials-icons/github.svg" className='w-12 mb-4 invert mx-auto' />
              </a>
            </button>
            <ul>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Projects</a>
              </li>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Contact</a>
              </li>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Marketing</a>
              </li>
            </ul>
          </div>
          <div className='text-center '>
            <button>
              <a href="#">
                <img src="assets/socials-icons/instagram.svg" className='w-12 mb-4 invert mx-auto' />
              </a>
            </button>
            <ul>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Brand Center</a>
              </li>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Blog</a>
              </li>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Careers</a>
              </li>
            </ul>
          </div>
          <div className='text-center '>
            <button>
              <a href="#">
                <img src="assets/socials-icons/linkedin.svg" className='w-12 mb-4 invert mx-auto' />
              </a>
            </button>
            <ul>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Info</a>
              </li>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Support</a>
              </li>
              <li className='mb-4'>
                <a href="" className='hover:text-white'>Marketing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer