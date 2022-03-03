import React from "react";
import PropTypes from "prop-types";

class HeroName2 extends React.Component {
  render() {
    return <h3>{this.props.name}</h3>;
  }
}

// PropTypes
HeroName2.propTypes = {
  name: PropTypes.bool,
};

export default class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      name: true,
    };
  }

  render() {
    return (
      <div className="header">
        <HeroName2 name={this.state.name} />
      </div>
    );
  }
}
