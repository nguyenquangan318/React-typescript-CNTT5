import { Component } from 'react'
import "./styles.css"

interface StateType {
  time: number;
  isRunning: boolean;
  isPaused: boolean;
}
export default class App extends Component<{}, StateType> {
  timer: number | null = null;
  constructor(props: {}) {
    super(props)
    this.state = {
      time: 0,
      isRunning: false,
      isPaused: false
    }
  }
  componentDidMount(): void {
    console.log("Component được mount");
  }
  componentDidUpdate(): void {
    console.log("Component được update");
  }
  componentWillUnmount(): void {
    console.log("Component được unmount");

  }
  render() {
    const startTime = () => {
      this.timer = setInterval(() => {
        this.setState(prev => ({ time: prev.time + 1 }))
      }, 1000)
      this.setState({
        isRunning: true,
        isPaused: false
      })
    }
    const formatTime = (seconds: number): string => {
      const hour = (Math.floor(seconds / 3600))
      const min = (Math.floor((seconds % 3600) / 60))
      const sec = (seconds % 60)
      return `${hour}:${min}:${sec}`
    }
    return (
      <div className="timer-container">
        <div className="timer-header">
          <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
        </div>
        <div className="mode-selector">
          <button className="mode-btn active" data-mode="stopwatch">
            Bấm Giờ
          </button>
        </div>
        <div className="time-display" id="timeDisplay">
          {formatTime(this.state.time)}
        </div>
        <div className="progress-bar">
          <div className="progress-fill" id="progressFill" />
        </div>
        <div className="controls">
          <button className="control-btn start-btn" id="startBtn" onClick={startTime}>
            Bắt Đầu
          </button>
          <button
            className="control-btn pause-btn"
            id="pauseBtn"
            style={{ display: "none" }}
          >
            Tạm Dừng
          </button>
          <button className="control-btn reset-btn" id="resetBtn">
            Đặt Lại
          </button>
        </div>
        <div className="status-message" id="statusMessage" />
      </div>
    )
  }
}
