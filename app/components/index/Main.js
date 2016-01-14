
"use strict";

import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Main extends React.Component {

	constructor() {
		super();
	}

	componentWillUnmount () {
		console.log(`componentWillUnmount ${new Date().getTime()}`)		
	}
	
	render() {
		return (
			// <div>
			// 	<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
			// 	<div className="card">
			// 		<h1>i am index Main</h1>
			// 	</div>

				<div id="main-content">
					fasdfa
				</div>
			// 	</ReactCSSTransitionGroup>
			// </div>
		);
	}
}

export default Main