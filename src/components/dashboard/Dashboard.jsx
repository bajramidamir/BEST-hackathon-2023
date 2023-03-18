import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from "firebase/firestore";
import CurtainCard from './CurtainCard';
import DashboardHeader from './DashboardHeader';
import Dropdown from './Dropdown';
import LightCard from './LightCard';
import TempCard from './TempCard';

const Dashboard = () => {

    
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchData = async () => {
          const docRef = doc(db, "rooms", "room-2");
          const docSnap = await getDoc(docRef);
    
          if (docSnap.exists()) {
            setData(docSnap.data());
          }
        };
    
        fetchData();
      }, []);
   
    

    

  return (
    <div className='bg-slate-100 text-slate-800 h-screen'>
        <DashboardHeader />

        <div className='flex'>
           
        <h1 className='text-center text-7xl'>{data.tempValue}</h1>

            <div className='mx-auto mt-16 w-4/5 text-center grid grid-cols-4 gap-4 overflow-x-auto'>
                <div>
                    <div className='mb-6'><LightCard  /></div>
                </div>
                <div>
                    <div className='mb-6'><TempCard tempVal={data.tempValue}  /></div>
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

export default Dashboard;