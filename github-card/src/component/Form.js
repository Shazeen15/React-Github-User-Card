import axios from "axios";
import React, { Component } from "react";
import GithubCard from "./GithubCard";
import Loading from "./Loading";

export class Form extends Component {
  state = {
    hubUser: "",
    github: {},
    searchError: "",
  };

  componentDidMount() {
    this.setState({
      github: this.props.github,
    });
  }

  handleUserChange = (e) => {
    this.setState({
      hubUser: e.target.value,
    });
  };

  searchNewUser = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.hubUser}`)
      .then((res) => {
        this.setState({
          github: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({
          searchError: "Make sure you have the right username",
        });
      });
  };

  render() {
    return (
      <>
        {this.state.searchError && <h1>{this.state.searchError}</h1>}
        <form onSubmit={this.searchNewUser}>
          <label htmlFor="hubUser">Search Github Users</label>
          <input
            type="text"
            name="hubUser"
            id="hubUser"
            value={this.state.hubUser}
            onChange={this.handleUserChange}
          />
          <button>Search</button>
        </form>
      </>
    );
  }
}

export default Form;
