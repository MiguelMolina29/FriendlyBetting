import React from 'react';
import MainContainer from './Container/MainContainer';
import Navbar from './Components/Navbar';
import LoginContainer from './Container/Login/LoginContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
