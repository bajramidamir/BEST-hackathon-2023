import { useState } from 'react';

function RangeSlider() {
  const [Value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.Value);
  };

  return (
    <input id="default-range" type="range" value= {Value} className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'></input>
     
  );
}


export default RangeSlider