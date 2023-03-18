import React, { useState } from 'react';
import LandingPage from './components/landing_page/LandingPage';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div className='bg-slate-100'>
      {loggedIn ? <Dashboard /> : <LandingPage /> }
    </div>
  )
}

export default App;
