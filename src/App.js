import React, { Component } from 'react';
import axios from 'axios';

class App extends Component { 
  constructor(props){
    super(props);

    this.state = {
      people: [],

    }

    this.getPeople = this.getPeople.bind(this);
  }

  // function to get the information from the API and AXIOS
  getPeople(){
    return axios.get("https://swapi.co/api/people")
    // will return a promise
    .then((response) => {
      console.log(response.data.results);
      this.setState( { people: response.data.results})
    })

  }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    return(
      <div className='App'>
      </div>
    );
  }
}

export default App;