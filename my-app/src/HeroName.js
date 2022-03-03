import React from "react";

class HeroName extends React.Component {
  render() {
    return <h3>{this.props.name}</h3>;
  }
}

// Props 1
/*
export default class Hero extends React.Component {
  render() {
    return (
      <div className="header">
        <HeroName name="Taufik" />
      </div>
    );
  }
}
*/

// Prop 2
export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Taufik",
    };
  }

  render() {
    return (
      <div className="header">
        <HeroName name={this.state.name} />
      </div>
    );
  }
}
