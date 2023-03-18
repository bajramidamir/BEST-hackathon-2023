import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase.js";
import Dashboard from './components/dashboard/Dashboard';
import LandingPage from './components/landing_page/LandingPage';


function App() {

  const [userAuth] = useAuthState(auth);

  return (
    <div >
      {userAuth ? <Dashboard /> : <LandingPage /> }
    </div>
  )
}

export default App;
