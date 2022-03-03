import React from "react";

export default class Users2 extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  setUsername = () => {
    this.setState({
      username: "user02",
    });
  };

  render() {
    return (
      <div className="header">
        <h1>{this.state.username}</h1>
        <br />
        <button onClick={this.setUsername}>Set Username</button>
      </div>
    );
  }
}
