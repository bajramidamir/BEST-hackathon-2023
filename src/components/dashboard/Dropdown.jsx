import React, { useState } from 'react'

const Dropdown = () => {
    const [dropdown,setDrop] = useState(false);
    const handleDrop = () => {
        setDrop(!dropdown);
      };
  return (
    <div className='bg-slate-50 shadow-lg p-4 rounded-lg grid grid-cols-2'>
      <div>
        <img src="/assets/television.svg" alt="" />
      </div>
      <div>
        <p className='text-xl font-extrabold text-center'>Pametni TV</p>
        <label class="flex justify-between justify-items-center p-2 text-xl">
          <input type="checkbox" class="appearance-none peer" />
          <span class="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
        </label>

        <div class="flex items-center justify-center w-full mt-5">
            <a href="https://www.youtube.com" target={'_blank'}><img className='w-10 h-10 inline-block mx-1 rounded-full ' src="/assets/youtube.svg" alt="" /></a>
            <a href="https://www.netflix.com" target={'_blank'}><img className='mx-1 w-10 inline-block h-10 rounded-full ' src="/assets/netflix.svg" alt="" /></a>
            <a href="https://open.spotify.com" target={'_blank'}><img className='w-10 h-10 inline-block x-1 rounded-full ' src="/assets/spotify.svg" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Dropdown