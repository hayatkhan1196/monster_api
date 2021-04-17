import "./App.css";

import React, { Component } from "react";
import CardList from "./components/CardList";
import axios from "axios";
import SearchBar from "./components/SearchBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      Searchbar: "",
    };
  }

    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        const monsters = res.data;
        this.setState({ monsters });
      });
    }
    searchOnchange = (e) => {
      this.setState({ Searchbar: e.target.value });
    };
    render() {
      const { monsters, Searchbar } = this.state;
      const monsterFilters = monsters.filter((monster) =>
        monster.name.toLowerCase().includes(Searchbar.toLowerCase())
      );
      return (
        <div className="App">
          <h1>ALL Monsters Search Here...</h1>
          <SearchBar searchOnchange={this.searchOnchange} />
          <CardList monsterFilters={monsterFilters} />
        </div>
      );
    }
  }

  export default App;
