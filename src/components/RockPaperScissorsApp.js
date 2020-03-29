import React from 'react';
import Header from './Header';
import Message from './Message';

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