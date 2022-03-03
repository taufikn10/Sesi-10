import React from "react";
import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import Users2 from "./Users2";
import HeroName from "./HeroName";
import HeroName2 from "./HeroName2";

// Components

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1>My First React App</h1>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <p>&copy; My self -2021</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <Content />
        <hr />
        <Footer />
        <hr />
        <Users />
        <Users2 />
        <Counter />
        <HeroName />
        <HeroName2 />
      </div>
    );
  }
}

export default App;
