
"use strict";

import React from 'react';
import {render} from 'react-dom';
import Card from '../Card';

import mainStore from '../../stores/mainStore';
import mainAction from '../../actions/mainAction';
 

class Main extends React.Component {

	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this.state = {
			card: ""
		}
		// console.log("about card")
	}

	componentDidMount() {
		// console.log("about didMount")
		mainStore.addChangeListener( this._onChange );
    	mainAction.loadData("data/aboutmain.json", "GET", "");
	}

	componentWillUnmount() {
		// console.log("about WillUnmount")
	    mainStore.removeChangeListener( this._onChange );
	}

	_onChange() {
		this.setState({ 
			card: mainStore.getMainData()
		}); 
	}

	render() {
		return (
			<div>
				<Card>
					{this.state.card}
				</Card>

				<div id="main-content" className="flex-layout row">
					<div className="left">
					</div>

					<div className="right flex-layout column">
						<div>
							fsd
						</div>
						<div>
							dfs
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main