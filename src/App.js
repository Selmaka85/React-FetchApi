import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// class component instead using functional component
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    //console.log('constructor');
    //console.log(1); // first run
  }

  //componentDidMount is used to fetch data on screen/ set up subscriptions or manipulate the DOM nodes
  
  componentDidMount() {
    //console.log('componentDidMount');
    //console.log(3); // second run
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }/*,
          () => {
            //console.log(this.state);
          }
          */
        )
      );
  }
  //get function to be initialised once and then can be called where is necessary
  onSearchChange=(event) => {
    //console.log(event.target.value);
    //console.log({ startingArray: this.state.monsters });
    // Cast search event into variable to make it easy for the search process and to be used in lowercase
    
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  }
  
  render() {
    //console.log('render'); // second run
    //console.log(2); // second run
    //code optimisation to be more performant and readable 
    const {monsters,searchField}=this.state;
    const {onSearchChange}=this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    /* https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ */
    return (
      <div className="App text-center">

        <h1 className="app-title text-center">List of Monsters!</h1>
        
        <SearchBox className={`monsters-search-box p-1 m-3 rounded text-center`} onChangeHandler={onSearchChange} placeholder={'Search Monsters...'}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
