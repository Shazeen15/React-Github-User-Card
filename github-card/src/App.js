import React, { Component } from "react";
import axios from "axios";

import Form from "./component/Form";

export class App extends Component {
  state = {
    github: {},
    error: "",
  };
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/shazeen15`)
      .then((res) => {
        this.setState({
          github: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: err.message,
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Github Card</h1>

        <Form github={this.state.github} error={this.state.error} />
      </React.Fragment>
    );
  }
}

export default App;
