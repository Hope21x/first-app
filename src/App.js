import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.jsx';
import {SearchBox} from './components/search-box/search-box.jsx';


class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField : ""
    };
  
}

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")  
    .then(response => response.json()) 
    .then(users => this.setState({monsters : users}))
  }

  render(){
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return(
    <div className="App">
      <h1>MONSTERS SEARCH</h1>
      <SearchBox 
        placeholder= 'Search Monsters'
        handleChange= {event => this.setState({searchField : event.target.value},() => this.state)}

      
      />
      
      
      <CardList monsters= {filteredMonsters}/>
      
    </div> 
    );
  }


}
 


export default App;
