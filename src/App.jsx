import React from "react"

class App extends React.Component {

  shouldCountDown = true;

  constructor() {
    super()
    this.state = {time: 1500};
  };

  componentDidMount() {
    this._startTimer();
  };

  _startTimer() {
    const interval = setInterval(() => {

      if(this.shouldCountDown) {
        !this.state.time ? clearInterval(interval) : this.setState({time: this.state.time - 1})
      }

    }, 1000);
  };

  _minutesMask(seconds) {
    return Math.floor(seconds / 60);
  };

  _secondsMask(seconds) {
    return Math.floor(seconds % 60);
  };

  _refresh () {
    this.setState({time: 1500});
  }

  _togglePlay () {
    this.shouldCountDown = !this.shouldCountDown;
  }

  render() {
    return (
      <>
      <button onClick={this._refresh.bind(this)}>Refresh</button>
        <span>
          {this._minutesMask(this.state.time)}:{this._secondsMask(this.state.time)}
        </span>
        <button onClick={this._togglePlay.bind(this)}>
          Play | Pause
        </button>
      </>
  )}
};

export default App