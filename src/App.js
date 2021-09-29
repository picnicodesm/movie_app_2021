import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state; // es6 보면 알 수 있음.
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
