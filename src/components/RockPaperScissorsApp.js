import React from 'react';

export default class RockPaperScissorsApp extends React.Component {
	constructor(props) {
	super(props)
	this.state = {
		choices: ['Rock', 'Paper', 'Scissors'],
		chosen: '',
		computer: ''
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		const randomPick = Math.floor(Math.random() * this.state.choices.length);
		this.setState(() => ({ 
			computer: this.state.choices[randomPick]
		}));
	}

	handleSubmit = (chosen) => {
		this.setState({ chosen });
	};

  	render() {
    	return (
    		<div>
      			<Header />
      			{this.state.choices.map((choice, index) =>
				<button 
					key={choice}
					type="button"
					value={choice}
					onClick={e => this.handleSubmit(e.target.value)}
				>{choice}
				</button>)}
      			<Message
      			computer={this.state.computer}
      			chosen={this.state.chosen}
      			/>
      		</div>
    	);
  	}
}

const Header = () => {
	return (
		<div>
			<h1>Rock, Paper, Scissors sayyysss...</h1>
			<h3>Choose your pick!</h3>
		</div>
	);
}

class Message extends React.Component {
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