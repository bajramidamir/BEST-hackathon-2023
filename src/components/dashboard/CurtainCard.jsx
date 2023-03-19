import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDoc, doc, updateDoc } from 'firebase/firestore';

const CurtainCard = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
 

  // prikupljamo iz baze podatke za ispis na UI
  const fetchData = async () => {
    const docRef = doc(db, 'rooms', 'room-1');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setData(docSnap.data().curtainValue);
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
    await updateDoc(docRef, { curtainValue: parseInt(val, 10) });
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
    <div >
        {data > 0 ? <img  src="https://www.svgrepo.com/show/429450/blinds-circus-curtain.svg" /> : <img src="https://www.svgrepo.com/show/293751/curtain.svg"  />}
    </div>
    <div>
      <p className='text-xl font-extrabold mb-8 mt-8'>Zavjesa</p>
      <input id="default-range" type="range" value= {data} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400' onChange={handleChange}></input>
    </div>
    </div>
  )
}

export default CurtainCard