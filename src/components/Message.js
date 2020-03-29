import React from 'react';

export default class Message extends React.Component {
	constructor(props) {
		super(props)
		this.handleWinner = this.handleWinner.bind(this);
	}
	handleWinner = () => {
		const chosen = this.props.chosen;
		const computer = this.props.computer;
		if (chosen === 'Rock' && computer === 'Scissors' ||
			chosen === 'Paper' && computer === 'Rock' ||
			chosen === 'Scissors' && computer === "Paper") {
			return "You Win!"		
		}
		if (chosen === 'Rock' && computer === 'Rock' ||
				chosen === 'Paper' && computer === 'Paper' ||
				chosen === 'Scissors' && computer === 'Scissors') {
			return 'It\'s A Tie!';
		}
		return 'You Lose!';
	}
	render() {
		return (
			<div>
				<h1>{this.handleWinner()}</h1>
				<p>You chose: {this.props.chosen}</p>
				<p>Player 2 chose: {this.props.computer}</p>
			</div>
		);
	}
}