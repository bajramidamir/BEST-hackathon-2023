import React from 'react'
import LightCard from './LightCard'


const Dashboard = () => {
  return (
    <div className='bg-gray-200 text-slate-800 h-screen'>
    <header className=' text-center text-2xl'>
        <p>gimmie some head hoe </p> </header>
        <div><p>sugoma balls</p></div>
        <div className='mx-auto w-4/5 text-center grid grid-cols-4 gap-4'>
            <LightCard image1={"https://cdn1.vectorstock.com/i/1000x1000/30/40/light-bulb-icon-simple-style-vector-8633040.jpg"} image2={"https://as1.ftcdn.net/v2/jpg/02/00/80/28/1000_F_200802852_u4Vs7EsYmMRNokt1hDOIdfCIzRbE3muo.jpg"}/>
            <div >02</div>
            <div >03</div>
            <div >04</div>

        </div>

    </div>
    
    )
}

export default Dashboard