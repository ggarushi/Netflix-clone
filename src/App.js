import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Home from  './Screens/Home';
import Login from './Screens/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/home"  component={Home}/>
        </Switch>
      </Router>
       
    </div>  
           
  );
}

export default App;
