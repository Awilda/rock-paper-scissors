import React from 'react';

export default class RockPaperScissorsApp extends React.Component {
	constructor(props) {
	super(props)
	this.state = {
		choices: ['Rock', 'Paper', 'Scissors'],
		chosen: '',
		computer: '',
		message: 'You Lose!'
	};
	this.handleSubmit = this.handleSubmit.bind(this);
	}

	randomChoice = () => {
		const randomPick = Math.floor(Math.random() * this.state.choices.length);
		const pick = this.state.choices[randomPick];

		this.setState(() => ({ 
			computer: pick 
		}));

		if(this.randomChoice) {
			return this.findWinner();
		}
	};

	findWinner = () => {
		const playerChoice = this.state.chosen;
		const computerChoice = this.state.computer;

		if (playerChoice == 'Rock' && computerChoice == 'Scissors' ||
			playerChoice == 'Paper' && computerChoice == 'Rock' ||
			playerChoice == 'Scissors' && computerChoice == "Paper") {
			
			this.setState(() => ({ 
				message: 'You Win!' 
			}));
		
		} else if (playerChoice == 'Rock' && computerChoice == 'Rock' ||
				playerChoice == 'Paper' && computerChoice == 'Paper' ||
				playerChoice == 'Scissors' && computerChoice == 'Scissors') {

			this.setState(() => ({ 
				message: 'It\'s A Tie!' 
			}));
		}

	};

	handleSubmit = chosen => {
		this.setState({ chosen });
		console.log(chosen);
		if(chosen !== '') {
			return this.randomChoice();
		}
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