import React, { useState } from 'react'

const TempCard = () => {

  const [temperatureValue, setTemperatureValue] = useState(15);


  const handleTempChange = ( operation ) => {
    if (operation === "increment")  {
      setTemperatureValue(temperatureValue + 1)
    } else if (operation === "decrement") {
      setTemperatureValue(temperatureValue - 1)
    }
  }

  return (
        <div className='bg-slate-50 shadow-lg p-4 rounded-lg grid grid-cols-2 items-center'>
            <img className="px-2" src="/assets/temp.svg" alt="" />
            <div>
                <h3 className='text-xl font-extrabold overflow-clip'>Temperature</h3>
                <button onClick={() => handleTempChange("increment")}>
                  <img className='w-14' src="/assets/up.svg" alt="" />
                </button>
                <p className='text-5xl mb-2'>{temperatureValue}°C</p>
                <button onClick={() => handleTempChange("decrement")}>
                  <img className='w-14' src="/assets/down.svg" alt="" />
                </button>
            </div>
        </div>
  )
}

export default TempCard