import React from 'react';
import logo from './logo.svg';
import './App.css';

import Bitcoin from './components/Bitcoins';
import Props from './components/Props'
import SignInSide from './components/SignIn'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Bitcoin></Bitcoin>
        <Props persona="Dieguito" edad="17" />
        <Props persona="Fernando" edad="18" />
      </header> */}
      <SignInSide/>
    </div>
  );
}

export default App;
