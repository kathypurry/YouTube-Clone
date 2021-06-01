import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Home from "./components/Home";
import Play from "./components/Play";
import React from 'react';

/*
Some of the functional components use regular functions,
while others use arrow functions (about.js, etc.). Unless there
is a specific reason to use both in the same project, stick to 
one or the other for the code's styling consistency.
*/
function App() {
  return (
    <div className="App">
          <div>
            /*
            Consider using a formatting plugin in your IDE to ensure
            indentation consistency and code legibility.
            */
            <Header />
          </div>
          <Switch> // Nice routing
            <Route exact path = "/" component={Home}/>
            <Route path= "/video/:id" component={Play}/>
            <Route path= "/About" component={About} />
          </Switch>
          </div>
  )
}

export default App;
