import React, { Component } from 'react';
import axios from 'axios';
import List from './components/List';


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
    return axios.get("https://swapi.co/api/people/")
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
    // es6 destructuring
    const { people } = this.state;
    return(
      <div className='App'>
        <List people={people} />
      </div>
    );
  }
}

export default App;