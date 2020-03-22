import React from 'react';

export default class RockPaperScissorsApp extends React.Component {
	constructor(props) {
	super(props)
	this.state = {
		choices: ['Rock', 'Paper', 'Scissors'],
		chosen: ''
	};
	}
	randomChoice = () => {
		const randomPick = Math.floor(Math.random() * this.state.choices.length);
		const pick = this.state.choices[randomPick];
		console.log(pick);
	};
	findWinner = () => {
		console.log("reading from findWinner function");
	};

  render() {
    return (
    	<div>
      		<Header />
      		<Choices choices={this.state.choices} chosen={this.handleSubmit} />
      		<ComputerChoice randomChoice={this.randomChoice} findWinner={this.findWinner} />
      	</div>
    );
  }
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Rock, Paper, Scissors sayyysss...</h1>
			</div>
		);
	}
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

const ComputerChoice = (props) => {
	return (
		<div>
			<button 
				onClick={props.randomChoice}
				>
					Shoot!
			</button>
		</div>
	);
};