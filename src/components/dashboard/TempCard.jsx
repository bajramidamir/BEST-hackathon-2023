import React, { useState } from 'react';
import { updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';



const TempCard = ( {tempVal} ) => {

  const [tempValue, setTempValue] = useState(tempVal);

  const handleTempChangeIncrement = async () => {
    if (operation === "increment" && tempVal < 40) {
      setTempValue(tempValue + 1)
    } 
    async (e) => {
      await updateDoc(doc(db, 'rooms', 'room-2'), {
        tempValue: tempValue + 1
      });
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
                <p className='text-5xl mb-2'>{tempVal}°C</p>
                <button onClick={() => handleTempChange("decrement")}>
                  <img className='w-14' src="/assets/down.svg" alt="" />
                </button>
            </div>
        </div>
  )
}

export default TempCard;