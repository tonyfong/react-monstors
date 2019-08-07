import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      monsters : [],
      searchText : ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users=> this.setState({monsters : users}));
  }
  handleChange = (e) => {
    this.setState({searchText: e.target.value});
  }
  render () {
    const {monsters, searchText} = this.state;
    const filteredmonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Tony Fong's Monster</h1>
        <SearchBox 
          placeholder="search monster"
          handleChange={this.handleChange}
          />
          <CardList monsters={filteredmonsters}>
          </CardList>
      </div>
    )
  }
}

export default App;
