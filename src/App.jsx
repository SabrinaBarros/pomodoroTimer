import React from "react"

class App extends React.Component {

  constructor() {
    super()
    this.state = {time: 5};
  };

  componentDidMount() {
    this._startTimer();
  };

  _startTimer() {
    const interval = setInterval(() => {

      !this.state.time ? clearInterval(interval) : this.setState({time: this.state.time - 1})

    }, 1000);
  };

  _minutesMask(seconds) {
    return Math.floor(seconds / 60);
  };

  _secondsMask(seconds) {
    return Math.floor(seconds % 60);
  };

  render() {
    return (
      <>
        <span>
          {this._minutesMask(this.state.time)}:{this._secondsMask(this.state.time)}
        </span>
        <button onClick={() => this.setState({time: 1500})}>Refresh</button>
      </>
  )}
};

export default App