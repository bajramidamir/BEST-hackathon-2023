import React, { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/landing_page/LandingPage';


function App() {

  const [loggedIn, setLoggedIn] = useState(true);


  return (
    <div >
      {loggedIn ? <Dashboard /> : <LandingPage /> }
    </div>
  )
}

export default App;
