import React from "react";

class Followers extends React.Component {
  render() {
    console.log(this.props.followers);
    return (
      <div>
        <h1>{this.props.gitHub.name}'s Github Followers</h1>
        {this.props.followers.map((follower) => {
          return (
            <div key={follower.id}>
              <h1>{follower.login}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Followers;
