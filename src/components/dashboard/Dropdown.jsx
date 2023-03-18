import React, { useState } from 'react'

const Dropdown = () => {
    const [dropdown,setDrop] = useState(false);
    const handleDrop = () => {
        setDrop(!dropdown);
      };
  return (
    <div>
    <button onClick={handleDrop} >...</button>
    {dropdown? <div className='inline-block '>
      <a href="https://www.youtube.com" ><img src="https://cdn.worldvectorlogo.com/logos/youtube-3.svg" alt="" /></a>
      <a href="https://www.netflix.com" ><img src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" alt="" /></a>
      <a href="https://open.spotify.com" ><img src="https://images.indianexpress.com/2022/10/Spotify-1.jpg" alt="" /></a>
    </div>:<div ></div>}
    </div>



  )
}

export default Dropdown