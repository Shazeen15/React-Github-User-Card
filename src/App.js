import React from "react";
import axios from "axios";
import "./App.css";
import Github from "./components/Github";

class App extends React.Component {
  state = {
    gitHub: {},
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/shazeen15")
      .then((res) => {
        this.setState({
          gitHub: res.data,
        });
        console.log(this.state.gitHub);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <Github gitHub={this.state.gitHub} />
      </div>
    );
  }
}

export default App;
