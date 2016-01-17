
"use strict";

import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {

	constructor() {
		super();
	}

	componentWillMount() {
		this.stepTime = 20;
		this.docBody = document.body;
		this.focElem = document.documentElement;
	}

	scrollAnimationStep (initPos, stepAmount) {
	    let newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;
	    this.docBody.scrollTop = this.focElem.scrollTop = newPos;
	    newPos && setTimeout(() => {
	        this.scrollAnimationStep(newPos, stepAmount);
	    }, this.stepTime);
	}

	scrollTopAnimated (speed) {
	    let topOffset = this.docBody.scrollTop || this.focElem.scrollTop;
	    let stepAmount = topOffset;
	    speed && (stepAmount = (topOffset * this.stepTime)/speed);
	    this.scrollAnimationStep(topOffset, stepAmount);
	}

	scrollToTop() {
		// alert("top");
		this.scrollTopAnimated(500);
		// document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		return (
			<footer className="flex-layout column v-between">
				<div className="flex-layout flex-end h-center">
					<a onClick={ () => this.scrollToTop() }>
						Scroll To Top 🔼
					</a>
				</div>
				<div>
					<div id="foot-info" className="flex-layout flex-end">
						<a href="/ttblog">我的Blog</a>
						<a href="https://github.com/Tonyce">我的Github</a>
						<a href="https://github.com/Tonyce/relearn-react">源码</a>
					</div>
					<h2>React GO ON</h2>
				</div>
			</footer>
		);
	}
}

export default Footer