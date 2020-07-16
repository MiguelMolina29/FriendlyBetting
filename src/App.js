import React from 'react';
import MainContainer from './Container/Maincontainer';
import Navbar from './Components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Container/Login/LoginContainer';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch> 
            <Login />       
          <Route exact path="/" component={MainContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
