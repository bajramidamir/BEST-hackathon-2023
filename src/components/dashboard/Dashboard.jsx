import React from 'react'
import LightCard from './LightCard'
import TempCard from './TempCard'


const Dashboard = () => {
  return (
    <div className='bg-gray-200 text-slate-800 h-screen'>
        <header className='text-white bg-emerald-400 mb-16 py-5 text-center text-5xl font-semibold tracking-widest'>
            <h1>DASHBOARD</h1>
        </header>
        <div className='mx-auto w-4/5 text-center grid grid-cols-4 gap-4'>
            <LightCard image1={"https://cdn1.vectorstock.com/i/1000x1000/30/40/light-bulb-icon-simple-style-vector-8633040.jpg"} image2={"https://as1.ftcdn.net/v2/jpg/02/00/80/28/1000_F_200802852_u4Vs7EsYmMRNokt1hDOIdfCIzRbE3muo.jpg"}/>
            <div ><TempCard /></div>
            <div >03</div>
            <div >04</div>

        </div>

    </div>
    
    )
}

export default Dashboard