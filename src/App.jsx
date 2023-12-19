import React from "react";
import Timer from "./Timer"

class App extends React.Component {

  shouldCountDown = false;
  currentModeTime = 1500;

  constructor() {
    super();
    this.state = {time: 1500, counter: 0};
  };

  componentDidMount() {
    this._startTimer();
  };

  _startTimer() {
    setInterval(() => {

      if(this.shouldCountDown) {

        if(!this.state.time) {

          this.shouldCountDown = false;
          this.setState({counter: this.state.counter + 1});

        } else {
          this.setState({time: this.state.time - 1});
        }

      }

    }, 1000);
  };

  _refresh() {
    this.setState({time: this.currentModeTime});
    this.shouldCountDown = false;
  };

  _togglePlay() {
    this.shouldCountDown = !this.shouldCountDown;
  };

  _pomodoro(totalModeTime) {
    this.setState({time: totalModeTime});
    this.currentModeTime = totalModeTime;
    this.shouldCountDown = false;
  };

  render() {
    return (
      <>
        <button data-test='focus-btn' onClick={() => this._pomodoro(1500)}>Focus Time</button>
        <button data-test='short-break-btn' onClick={() => this._pomodoro(300)}>Short Break</button>
        <button data-test='long-break-btn' onClick={() => this._pomodoro(900)}>Long Break</button>
        <br></br>
        <button data-test='refresh-btn' onClick={this._refresh.bind(this)}>Refresh</button>
        <Timer time={this.state.time}/>
        <button data-test='toggle-btn' onClick={this._togglePlay.bind(this)}>
          Play | Pause
        </button>
        <br></br>
        <span data-test='counter'>{'#' + this.state.counter}</span>
      </>
  )}
};

export default App