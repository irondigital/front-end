import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello from Class Component App!",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>This whole project is now running using class components!</p>
      </div>
    );
  }
}

export default App;
