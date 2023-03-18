import React from 'react'
import CurtainCard from './CurtainCard'
import Dropdown from './Dropdown'
import LightCard from './LightCard'
import TempCard from './TempCard'


const Dashboard = () => {
  return (
    <div className='bg-slate-100 text-slate-800 h-screen'>
        <header className='text-white bg-emerald-400 mb-16 py-5 text-center text-5xl font-semibold tracking-widest'>
            <h1>DASHBOARD</h1>
        </header>
        <div className='flex'>
            <aside className='w-22 fixed left-0 top-0 h-full bg-emerald-300'>
                <a href="#"><img className='w-20 p-3 m-3 bg-emerald-500 shadow-md rounded-full transition ease-in-out hover:shadow-none hover:bg-emerald-400' src="assets/plus.svg" alt="" /></a>
                <a href="#"><img className='w-20 p-3 m-3 bg-emerald-500 shadow-md rounded-full transition ease-in-out hover:shadow-none hover:bg-emerald-400' src="assets/bedroom.svg" alt="" /></a>
                <a href="#"><img className='w-20 p-3 m-3 bg-emerald-500 shadow-md rounded-full transition ease-in-out hover:shadow-none hover:bg-emerald-400' src="assets/kitchen.svg" alt="" /></a>
                <a href="#"><img className='w-20 p-3 m-3 bg-emerald-500 shadow-md rounded-full transition ease-in-out hover:shadow-none hover:bg-emerald-400' src="assets/living.svg" alt="" /></a>
            </aside>
            <div className='mx-auto mt-16 w-4/5 text-center grid grid-cols-4 gap-4 overflow-x-auto'>
                <div>
                    <div className='mb-6'><LightCard image1={"https://cdn1.vectorstock.com/i/1000x1000/30/40/light-bulb-icon-simple-style-vector-8633040.jpg"} image2={"https://as1.ftcdn.net/v2/jpg/02/00/80/28/1000_F_200802852_u4Vs7EsYmMRNokt1hDOIdfCIzRbE3muo.jpg"}/></div>
                </div>
                <div>
                    <div className='mb-6'><TempCard /></div>
                    <div className='mb-6'><CurtainCard/></div>
                </div>
                <div>
                    <div className='mb-6'><Dropdown /></div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard