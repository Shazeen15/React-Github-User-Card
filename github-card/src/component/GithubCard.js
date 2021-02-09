import React, { Component } from "react";

export class GithubCard extends Component {
  render() {
    return (
      <>
        <h1>{this.props.github.name}</h1>
        <h1>{this.props.error}</h1>
      </>
    );
  }
}

export default GithubCard;
