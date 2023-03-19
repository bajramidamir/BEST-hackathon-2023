import React, { useState, useEffect } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';



const TempCard = () => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'rooms', 'room-1');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };
    fetchData();
  }, [db]);

  const handleUpdate = async () => {
    const docRef = doc(db, 'rooms', 'room-1');
    await updateDoc(docRef, { tempValue: data.tempValue + 1 });
    setData(prevData => ({ ...prevData, tempValue: data.tempValue + 1 }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
        <div className='bg-slate-50 shadow-lg p-4 rounded-lg grid grid-cols-2 items-center'>
            <img className="px-2" src="/assets/temp.svg" alt="" />
            <div>
                <h3 className='text-xl font-extrabold overflow-clip'>Temperature</h3>
                <button onClick={handleUpdate} >
                  <img className='w-14' src="/assets/up.svg" alt="" />
                </button>
                <p className='text-5xl mb-2'>{data.tempValue}°C</p>
                <button >
                  <img className='w-14' src="/assets/down.svg" alt="" />
                </button>
            </div>
        </div>
  )
}

export default TempCard;