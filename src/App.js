import './App.css';
import { PersonsTable } from "./PersonsTable";

let teams = [
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
];

function App() {
  return (
    <div>
      <h1>Teams Networking</h1>
      <div>Search</div>
      <PersonsTable teams={teams} border={1} />
    </div>
  );
}

export default App;
