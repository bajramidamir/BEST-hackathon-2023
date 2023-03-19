import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

const LightCard = () => {
  

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
 

  // prikupljamo iz baze podatke za
  const fetchData = async () => {
    const docRef = doc(db, 'rooms', 'room-1');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setData(docSnap.data().lightValue);
    } else {
      console.log('No such document!');
    }
    setLoading(false);
  };
  

  useEffect(() => {
      fetchData();
    }, []);


  const updateDb = async (val) => {
    const docRef = doc(db, 'rooms', 'room-1');
    await updateDoc(docRef, { lightValue: parseInt(val, 10) });
  }

  
  const handleChange = async (e) => {
    updateDb(e.target.value)
    setData(parseInt(e.target.value, 10));
  };

  // ovo s renderuje dok cekamo podatke iz Firebasea
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-slate-50 shadow-lg p-4 rounded-lg grid grid-cols-2'>
    <div>
        {(data > 0) ? <img  src= "https://www.svgrepo.com/show/507205/bulb-on.svg" /> : <img src="https://www.svgrepo.com/show/507551/bulb.svg"  />}
    </div>
    <div>
      <p className='text-xl font-extrabold mb-8 mt-8'>Sijalica</p>
      <input id="default-range" type="range" value={data} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer' onChange={handleChange}></input>
    

    </div>
    </div>
  )
}

export default LightCard;