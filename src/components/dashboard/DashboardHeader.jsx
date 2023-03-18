import React from 'react'
import { auth } from '../../firebase'

const DashboardHeader = () => {

    

    return (
        <header className='text-white p-6 bg-emerald-400 mb-8 flex justify-between tracking-widest'>
                <h1 className='text-center text-5xl font-semibold'>DASHBOARD</h1>
                <button onClick={() => auth.signOut()} className='p-3 bg-emerald-600 float-right rounded-lg hover:bg-emerald-500'>
                    Log out
                </button>
        </header>
    )
}

export default DashboardHeader;