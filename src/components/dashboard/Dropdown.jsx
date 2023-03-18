import React, { useState } from 'react'

const Dropdown = () => {
    const [dropdown,setDrop] = useState(false);
    const handleDrop = () => {
        setDrop(!dropdown);
      };
  return (
    <div>
    <button onClick={handleDrop} >...fropdown</button>
    <br />
    {dropdown? <div className=' w-40  '>
      <a href="https://www.youtube.com" target={'_blank'}><img src="https://cdn.worldvectorlogo.com/logos/youtube-3.svg" alt="" className='w-10 h-10 inline-block mx-1 rounded-xl ' /></a>
      <a href="https://www.netflix.com" target={'_blank'}><img src="https://play-lh.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI" alt="" className='mx-1 w-10 h-10 inline-block rounded-xl ' /></a>
      <a href="https://open.spotify.com" target={'_blank'}><img src="https://images.indianexpress.com/2022/10/Spotify-1.jpg" alt="" className='w-10 h-10 inline-block mx-1 rounded-xl ' /></a>
    </div>:<div ></div>}
    </div>



  )
}

export default Dropdown