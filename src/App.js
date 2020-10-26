import React,{ Component } from 'react';
import './App.css';
import {
  Switch,
  Route, BrowserRouter
} from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Index from './components/layouts/Index';
import { Provider } from './context';
import Lyrics from './components/tracks/Lyrics';



class App extends Component{
  render(){
    return(
      <Provider>
        <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Index />
                </Route>
                <Route exact path="/lyrics/track/:id">
                  <Lyrics />
                </Route>
              </Switch>
            </div>
        </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}


export default App;
