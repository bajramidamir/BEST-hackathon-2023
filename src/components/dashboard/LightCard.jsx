import React, { useState } from 'react'
import RangeSlider from './Slider';

//https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x2.jpg
const LightCard = () => {
  
  const [flag, setFlag] = useState(false);


  const handleFlagChange = () => {
    setFlag(!flag)
  }

  return (
    <div className=' shadow-lg p-4 rounded-lg grid grid-cols-2'>
    <div >
        {flag? <img  src= "https://www.svgrepo.com/show/507205/bulb-on.svg" /> : <img src="https://www.svgrepo.com/show/507551/bulb.svg"  />}
    </div>
    <div>
      <button onClick={handleFlagChange} className='h-2/5  mt-1' > this is a button </button>
      <RangeSlider/>

    </div>
    </div>
  )
}

export default LightCard