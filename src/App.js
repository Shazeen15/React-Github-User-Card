import React from "react";
import axios from "axios";
import "./App.css";
import Github from "./components/Github";
import Followers from "./components/Followers";

class App extends React.Component {
  state = {
    gitHub: {},
    followers: [],
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.gitHub !== this.state.gitHub) {
      axios
        .get("https://api.github.com/users/shazeen15/followers")
        .then((res) => {
          this.setState({
            followers: res.data,
          });
          console.log(this.state.followers);
        });
    }
  }

  render() {
    return (
      <div>
        <Github gitHub={this.state.gitHub} />
        <Followers
          gitHub={this.state.gitHub}
          followers={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
