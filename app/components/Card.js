
"use strict";

import React from 'react';
import {render} from 'react-dom';

class Card extends React.Component {

	constructor() {
		super();
	}

	// componentDidMount() {
	// // 	console.log(`about did Mount ${new Date().getTime()}`)
	// 	console.log(this.props.path)
	// }

	// componentWillReceiveProps(nextProps) {
 //        console.log(`componentWillReceiveProps ${nextProps.path}`)    
 //    }

	// shouldComponentUpdate(nextProps, nextState) {
 //        // console.log(`shouldComponentUpdate ${new Date().getTime()}`)    
 //        // console.log(nextProps, this.props)
 //        return nextProps.path !== this.props.path
 //    }

	render() {
		// console.log(this.props.path)
		return (
			<div className="card">
				<h1>i am  {this.props.children} Card</h1>
			</div>
		);
	}
}

export default Card