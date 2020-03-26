import React from 'react';

export default class RockPaperScissorsApp extends React.Component {
	constructor(props) {
	super(props)
	this.state = {
		choices: ['Rock', 'Paper', 'Scissors'],
		chosen: '',
		computer: '',
		message: 'You Win!'
	};
	}
	randomChoice = () => {
		const randomPick = Math.floor(Math.random() * this.state.choices.length);
		const pick = this.state.choices[randomPick];

		this.setState(() => ({ 
			computer: pick 
		}));

		console.log(pick);
	};
	findWinner = (randomChoice) => {
		console.log("findWinner");
		console.log(this.state.chosen);
	};

  render() {
    return (
    	<div>
      		<Header />
      		<Choices choices={this.state.choices} chosen={this.handleSubmit} />
      		<ComputerChoice 
      			randomChoice={this.randomChoice} 
      			computer={this.state.computer}
      		/>
      		<GetWinningPlayer 
      			findWinner={this.findWinner}
      			message={this.state.message}
      		/>
      	</div>
    );
  }
}

const Header = () => {
	return (
		<div>
			<h1>Rock, Paper, Scissors sayyysss...</h1>
		</div>
	);
}

class Choices extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit = chosen => {
		this.setState({ chosen });
		console.log(chosen);
	}	
	render() {
		return(
			<div>
				{this.props.choices.map((choice, index) =>
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

class ComputerChoice extends React.Component {
	constructor(props) {
		super(props);
		this.randomChoice = props.randomChoice.bind(this);
	}
	render() {
		return (
			<div>
				<button
					onClick={e => this.randomChoice(e.target.value)}
					>
						randomChoice
				</button>
			</div>
		);
	}
}

class GetWinningPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.findWinner = props.findWinner.bind(this);
	}
	render() {
		return (
			<div>
				<button
					onClick={e => this.findWinner(e.target.value)}
					>
						findWinner
				</button>
			</div>
		);
	}
}