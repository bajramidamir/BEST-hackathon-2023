import React from 'react';
import CurtainCard from './CurtainCard';
import DashboardHeader from './DashboardHeader';
import SmartTVCard from './SmartTVCard'
import LightCard from './LightCard';
import TempCard from './TempCard';
import Footer from '../landing_page/Footer';

const Dashboard = () => {

  return (
    <div className='bg-slate-100 text-slate-800 h-screen'>
        <DashboardHeader />
        <div className='flex'>
            <div className='mx-auto mt-16 mb-64 w-4/5 text-center grid grid-cols-2 md:grid-cols-4 gap-4 overflow-x-auto'>
                <div>
                    <div className='mb-6'><LightCard  /></div>
                </div>
                <div>
                    <div className='mb-6'><TempCard /></div>
                </div>
                <div>
                    <div className='mb-6'><CurtainCard /></div>
                </div>
                <div>
                    <div className='mb-6'><SmartTVCard /></div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    )
}

export default Dashboard;