import { Component } from 'react';
import './App.css';
import { PersonsTable } from "./PersonsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    }
  }

  componentDidMount() {
    console.warn('mount');
    setTimeout(() => {
      console.warn('loaded');
      this.setState({
        teams: [
          {
            "id": "abcdef1610310163146",
            "firstName": "Nic",
            "lastName": "Matei",
            "gitHub": "nmatei"
          },
          {
            "id": "qhejbm1610993148257",
            "firstName": "Cristian",
            "lastName": "Cozma",
            "gitHub": "CristiCozma"
          }
        ]
      })
    }, 2000);

  }

  render() {
    console.debug(this.state.teams);
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable teams={this.state.teams} border={1} />
      </div>
    );
  }
}

export default App;
