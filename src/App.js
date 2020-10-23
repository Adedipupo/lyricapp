import React,{ Component } from 'react';
import './App.css';
import {
  Switch,
  Route, BrowserRouter
} from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';



class App extends Component{
  render(){
    return(
      <>
        <BrowserRouter>
        <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
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
