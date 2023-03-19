import React, { useState } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';



const TempCard = ({ val }) => {

    const handleIncrement = async () => {
      const [newVal, setNewVal] = useState(val);

      setNewVal(newVal + 1);

      const docRef = doc(db, "rooms", "room-1");
      await updateDoc(docRef, { tempValue: newVal });

  }

  

  return (
        <div className='bg-slate-50 shadow-lg p-4 rounded-lg grid grid-cols-2 items-center'>
            <img className="px-2" src="/assets/temp.svg" alt="" />
            <div>
                <h3 className='text-xl font-extrabold overflow-clip'>Temperature</h3>

               

                <button onClick={handleIncrement}>
                  <img className='w-14' src="/assets/up.svg" alt="" />
                </button>
                <p className='text-5xl mb-2'>{val}°C</p>
                <button >
                  <img className='w-14' src="/assets/down.svg" alt="" />
                </button>
            </div>
        </div>
  )
}

export default TempCard;