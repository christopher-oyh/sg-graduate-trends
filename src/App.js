import React from 'react';
import './App.css';

import BarChart from './Components/BarChart'
import Body from './Components/Body';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Title from './Components/Title';

function App() {

  return(
    <div>
      
      <Navbar/>
      {/* <Title/> */}
      {/* <BarChart/> */}
      {/* <Body/> */}
      <Dashboard/>
    </div>
  )
}

export default App;
