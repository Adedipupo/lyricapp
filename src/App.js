import React,{ Component } from 'react';
import './App.css';
 import Navbar from './components/layouts/Navbar';
// import { Router, Route, Switch  } from 'react-router-dom';
// import Index from './components/layouts/Index';



class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar />
      </div>
    );
  }
}


export default App;
