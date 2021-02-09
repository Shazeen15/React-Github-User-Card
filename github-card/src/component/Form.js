import axios from "axios";
import React, { Component } from "react";
import GithubCard from "./GithubCard";
import Loading from "./Loading";

export class Form extends Component {
  state = {
    hubUser: "",
    github: this.props.github,
    searchError: "",
  };

  componentDidUpdate(prevState, prevProps) {
    if (prevState.github !== this.state.github) {
      if (Object.keys(this.state.github).length === 0) {
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
    }
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
    console.log(this.state.github);
    return (
      <>
        {this.state.searchError && <h1>{this.state.searchError}</h1>}
        <form onSubmit={this.searchNewUser}>
          <label htmlFor="hubUser">Search Github Users </label>
          <input
            type="text"
            name="hubUser"
            id="hubUser"
            value={this.state.hubUser}
            onChange={this.handleUserChange}
          />
          <button>Search</button>
        </form>
        {Object.keys(this.state.github).length === 0 ? (
          <Loading />
        ) : (
          <GithubCard github={this.state.github} error={this.props.error} />
        )}
      </>
    );
  }
}

export default Form;
