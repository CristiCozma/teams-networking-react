import { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { PersonsTable } from "./PersonsTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      date: new Date().toString(),
    };
    console.warn("props", props);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toString(),
      });
    }, 60000);

    this.load();
  }

  load() {}

  add(team) {
    console.warn("team", team);
    document.getElementById("main-form").reset();

    fetch("http://localhost:3000/teams-json/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(team),
    })
      .then((res) => res.json())
      .then((r) => {
        console.warn(r);
        if (r.success) {
          team.id = r.id;
          const teams = this.state.teams.concat(team);
          this.setState({
            teams,
          });
          //this.load();
        }
      });
  }

  remove(id) {
    fetch("http://localhost:3000/teams-json/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((r) => r.json())
      .then((status) => {
        this.load();
      });
  }

  render() {
    return (
      <div>
        <h1>Teams Networking</h1>
        <div>Search</div>
        <PersonsTable
          teams={this.props.teams}
          border={1}
          onSubmit={(team) => {
            this.add(team);
          }}
          onDelete={(id) => {
            this.remove(id);
          }}
        />
        <div>{this.state.date}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.info("map state to props", state);
  return {
    teams: state.teams,
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
