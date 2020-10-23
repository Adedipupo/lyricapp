import React,{ Component } from 'react';
import './App.css';
import {
  Switch,
  Route, BrowserRouter
} from "react-router-dom";
 import Index from './components/layouts/Index';
import Navbar from './components/layouts/Navbar';



class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/index">
                <Index />
              </Route>
            </Switch>
          </div>

        </BrowserRouter>
      </>
    );
  }
}


export default App;
