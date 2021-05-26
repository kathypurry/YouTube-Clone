import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from "./components/Home";
import Play from "./components/Play";
import React from 'react';


function App() {
  return (
    <div className="App">


          <div>
          <Header />
          </div>
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path= "/video/:id" component={Play}/>
            <Route path= "/About" component={About} />

          </Switch>
          </div>
  )
}

export default App;
