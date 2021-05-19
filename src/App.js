import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom'
import './App.css';
import About from './components/About'
import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      results : [],
    }
  }

  // getResults = async () => {
  //   const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${apiKEY}&part=snippet&maxResults=10`)
  //   this.setState ({
  //     results : data,
  //   })
  // }
  
  render() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path = "/"/>
        <Route path= "/about" component={About}/>
      </Switch>
    </div>
  );
  }
}

export default App;
