import React from 'react';
import Maincontainer from './Container/Maincontainer';
import Navbar from './Components/Navbar';
import LoginContainer from './Container/Login/LoginContainer';


function App() {
  return (
    <div className="App">
      
      < Maincontainer />
       <LoginContainer/>
    </div>
  );
}

export default App;
