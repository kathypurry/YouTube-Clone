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
    const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${process.env.REACT_APP_API_KEY}&part=snippet&maxResults=10`)
    this.setState ({
      results : data,
    })
    console.log(data);
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
