import "./App.css";

import React, { Component } from "react";
import CardList from "./components/CardList";
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const monsters = res.data;
        this.setState({ monsters });
      })
  }

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
