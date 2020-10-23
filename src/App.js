import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import { Router, Route, Switch  } from 'react-router';



class App extends React.Component{
  render(){
    return(
      <Router>
        <React.Fragment>
          <Navbar />

          <div className="container">
             <Switch>
               <Route exact path="/" component={Index} />
             </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}


export default App;
