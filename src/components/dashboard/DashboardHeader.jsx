import React from 'react'
import { auth } from '../../firebase'

const DashboardHeader = () => {
    
    // const [time, setTime] = useState(new Date());

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(new Date());
    //         }, 1000);
    //         return () => clearInterval(timer);
    // }, []);

    // const getBackgroundImage = () => {
    //     const hour = time.getHours();

    //     if (hour >= 6 && hour < 12) {
    //     return morningImage;
    //     } else if (hour >= 12 && hour < 18) {
    //     return afternoonImage;
    //     } else if (hour >= 18 && hour < 24) {
    //     return eveningImage;
    //     } else {
    //     return nightImage;
    //     }
    // };

    return (
        <header className='text-white p-6 bg-emerald-400 mb-8 flex justify-between tracking-widest'>
                <h1 className='text-center text-5xl font-semibold'>Welcome, {auth.currentUser.displayName} </h1>
                <button onClick={() => auth.signOut()} className='p-3 bg-emerald-600 float-right rounded-lg hover:bg-emerald-500'>
                    Log out
                </button>
        </header>
    )
}

export default DashboardHeader;