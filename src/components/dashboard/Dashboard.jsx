import React from 'react'
import CurtainCard from './CurtainCard'
import DashboardHeader from './DashboardHeader'
import Dropdown from './Dropdown'
import LightCard from './LightCard'
import TempCard from './TempCard'


const Dashboard = () => {
  return (
    <div className='bg-slate-100 text-slate-800 h-screen'>
        <DashboardHeader />

        <div className='flex'>
           


            <div className='mx-auto mt-16 w-4/5 text-center grid grid-cols-4 gap-4 overflow-x-auto'>
                <div>
                    <div className='mb-6'><LightCard /></div>
                </div>
                <div>
                    <div className='mb-6'><TempCard /></div>
                    
                </div>
                <div>
                <div className='mb-6'><CurtainCard/></div>
                    
                </div>
                <div><div className='mb-6'><Dropdown /></div></div>
            </div>
        </div>
    </div>
    )
}

export default Dashboard