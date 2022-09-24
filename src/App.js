import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
	state = {
		second: 0,
		minute: 0,
		hour: 0,
		btnDisabled: false,
		interval: ''
	};
	startClicked = () => {
		this.setState({
			btnDisabled: true
		});
		let time = setInterval(() => {
			const { second, minute, hour, btndisable } = this.state;
			if (second == 59) {
				if (minute == 59) {
					this.setState({
						second: 0,
						minute: 0,
						hour: hour + 1
					});
				} else {
					this.setState({
						second: 0,
						minute: minute + 1
					});
				}
			} else {
				this.setState({
					second: second + 1
				});
			}
		}, 1000);
		this.setState({
			interval: time
		});
	};

	stopClicked = () => {
		clearInterval(this.state.interval);
		this.setState({
			btnDisabled: false
		});
	};

	render() {
		const { hour, minute, second, btnDisabled } = this.state;
		return (
			<div>
				<div className="time-container">
					<h1 className="mb-4">Online stop watch</h1>
					<div className="timer-col">
						<p className="time-hours">{hour}</p>
						<p className="timer-label">Hours</p>
					</div>
					<div className="timer-col">
						<p className="timer-minutes">{minute}</p>
						<p className="timer-label">minutes</p>
					</div>
					<div className="time-col">
						<p className="timer-seconds">{second}</p>
						<p className="timer-label">sec</p>
					</div>
				</div>
				<div className="timer-container text-center">
					<div className="timer-btn">
						<button className="btn btn-success" disabled={btnDisabled} onClick={this.startClicked}>
							STart
						</button>
					</div>

					<div className="timer-btn">
						<button className="btn btn-danger" onClick={this.stopClicked}>
							Stop
						</button>
					</div>

					<div className="timer-btn">
						<button className="btn btn-secondary">Interval</button>
					</div>
					<div className="timer-btn">
						<button className="btn btn-warning">Clear</button>
					</div>
				</div>
			</div>
		);
	}
}
