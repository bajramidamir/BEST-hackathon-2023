import React from 'react'

const TempCard = () => {
  return (
    <div>
        <div className='bg-slate-50 shadow-lg p-4 rounded-lg grid grid-cols-2 items-center'>
            <img className="px-2" src="/assets/temp.svg" alt="" />
            <div>
                <h3 className='text-3xl font-light'>Temperature</h3>
                <button><img className='w-14' src="/assets/up.svg" alt="" /></button>
                <p className='text-5xl mb-2'>55°C</p>
                <button><img className='w-14' src="/assets/down.svg" alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default TempCard