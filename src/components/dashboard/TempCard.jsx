import React from 'react'

const TempCard = () => {
  return (
    <div>
        <div className='shadow-lg p-4 rounded-lg grid grid-cols-2'>
            <img src="/assets/temp.svg" alt="" />
            <div>
                <h3 className='text-2xl text-white font-light '>Temperature</h3>
                <p className='text-5xl'></p>
            </div>
        </div>
    </div>
  )
}

export default TempCard