import React from "react";

class Github extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.gitHub.avatar_url} alt="shazeen profile img" />
        <h1>{this.props.gitHub.name}</h1>
        <h2>{this.props.gitHub.bio}</h2>
        <p>{this.props.gitHub.location}</p>
        <p>{this.props.gitHub.login}</p>
        <a href={this.props.gitHub.blog} target="_blank" rel="noreferrer">
          Blog
        </a>
        <p>Followers: {this.props.gitHub.followers}</p>
        <p>Following: {this.props.gitHub.following}</p>
        <p>Repos: {this.props.gitHub.public_repos}</p>
        <p>Twitter: {this.props.gitHub.twitter_username}</p>
      </div>
    );
  }
}

export default Github;
