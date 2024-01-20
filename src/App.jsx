import React, {createRef} from "react";
import Timer from "./components/timer/Timer";
import "./app.css";
import RefreshIcon from "./icons/refresh.svg?react";
import PlayIcon from "./icons/play.svg?react";
import PauseIcon from "./icons/pause.svg?react";

class App extends React.Component {

  currentModeTime = 1500;
  actionButtonRef = createRef();

  constructor() {
    super();
    this.state = {time: 1500, shouldCountDown: false};
  };

  componentDidMount() {
    this._startTimer();
    this._currentTab();
  };

  _startTimer() {
    setInterval(() => {

      if(this.state.shouldCountDown) {

        if(!this.state.time) {

          this.setState({shouldCountDown: false});
          this.actionButtonRef.current.disabled = true;

        } else {
          this.setState({time: this.state.time - 1});
        }

      }

    }, 1000);
  };

  _refresh() {
    this.setState({time: this.currentModeTime});
    this.setState({shouldCountDown: false});
    this.actionButtonRef.current.disabled = false;
  };

  _togglePlay() {
    this.setState({shouldCountDown: !this.state.shouldCountDown});
  };

  _pomodoro(totalModeTime) {
    this.setState({time: totalModeTime});
    this.currentModeTime = totalModeTime;
    this.setState({shouldCountDown: false});
    this.actionButtonRef.current.disabled = false;
  };

  _currentTab() {

    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => {

      tab.addEventListener('click', () => {

        tabs.forEach(tab => tab.classList.remove('tab-btn---current'));
        tab.classList.add('tab-btn---current');

      });

    });

  };

  render() {
    return (
      <>
        <div className="tab-container">
          <button className="tab-btn tab-btn---current" data-test='focus-btn' onClick={() => this._pomodoro(1500)}>Focus</button>
          <button className="tab-btn" data-test='short-break-btn' onClick={() => this._pomodoro(300)}>Break</button>
          <button className="tab-btn" data-test='long-break-btn' onClick={() => this._pomodoro(900)}>Interval</button>
        </div>

        <div className="main-container">
          <button className="action-btn" data-test='refresh-btn' onClick={this._refresh.bind(this)}>
            <RefreshIcon/>
          </button>
          <Timer time={this.state.time}/>
          <button ref={this.actionButtonRef} className="action-btn" data-test='toggle-btn' onClick={this._togglePlay.bind(this)}>
            {this.state.shouldCountDown ? <PauseIcon/> : <PlayIcon/>}
          </button>
        </div>

        <footer className="footer">• Developed by <a className="footer__link" href="https://github.com/SabrinaBarros">Sabrina Barros</a> •</footer>
      </>
  )}

};

export default App
