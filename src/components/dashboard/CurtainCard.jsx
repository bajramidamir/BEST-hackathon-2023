import React, { useState } from 'react'
//https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x2.jpg
const CurtainCard = () => {
    const [Value, setValue] = useState(50);

    const handleChange = (e) => {
      setValue(e.target.value);
    };

  return (
    <div className='bg-slate-50 shadow-lg p-4 rounded-lg grid grid-cols-2'>
    <div >
        {Value>0? <img  src= "https://www.svgrepo.com/show/429450/blinds-circus-curtain.svg" /> : <img src="https://www.svgrepo.com/show/293751/curtain.svg"  />}
    </div>
    <div>
      <p className='text-xl font-extrabold mb-8 mt-8'>Zavjesa</p>
      <input id="default-range" type="range" value= {Value} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-400' onChange={handleChange}></input>
    </div>
    </div>
  )
}

export default CurtainCard