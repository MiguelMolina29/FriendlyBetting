import React from 'react';
import MainContainer from './Container/Maincontainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ApuestaContainer from './Container/ApuestaContainer';
// import CreateApuesta from './Components/CreateApuesta';
import CreateContainer from './Container/CreateContainer';
// import Login from './Container/Login/LoginContainer';
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Switch> 
            {/* <Login />        */}
          <Route exact path="/" component={MainContainer}/>
          <Route exact path="/Apuesta" component={ApuestaContainer}/>
          <Route exact path="/Create" component={CreateContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
