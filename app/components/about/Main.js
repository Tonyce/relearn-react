
"use strict";

import React from 'react';
import {render} from 'react-dom';

class Card extends React.Component {

	constructor() {
		super();
	}

	render() {
		return (
			<div className="card">
				<h1>i am about main</h1>
			</div>
		);
	}
}

class Main extends React.Component {

	constructor() {
		super();
	}

	// componentWillMount() {
	// 	console.log(`about will Mount ${new Date().getTime()}`)
	// }

	// componentDidMount() {
	// 	console.log(`about did Mount ${new Date().getTime()}`)
	// }

	// componentWillUnmount () {
	// 	console.log(`about componentWillUnmount ${new Date().getTime()}`)		
	// }

	render() {
		return (
			// <div components={{ Card: Card }}>
				// <Card />

				<div id="main-content">
					fasdfa
				</div>
			// </div>
		);
	}
}

export default Main