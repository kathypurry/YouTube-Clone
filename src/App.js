import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom'
import './App.css';
import About from './components/About'
import React, {Component} from 'react'

import axios from 'axios'

console.log(process.env.REACT_APP_API_KEY);

class App extends Component {
  constructor() {
    super()
    this.state = {
      results : [],
      search: '',
    }
  }


    getResults = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY
      try {const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&key=${API_KEY}&type=video&q=${'puppies'}`)
      this.setState ({
        results: data,
        search: '',
      })
      console.log(data);
    }

    catch {
      console.log('Error');
    }

  }



  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = "/"/>
        <Route path= "/About" component={About}/>
      </Switch>
    </div>
  );
  }
}


export default App;
