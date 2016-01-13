"use strict";

import React from 'react';
import {render} from 'react-dom';
import mui from 'material-ui';

var IconButton = mui.IconButton;
let MenuButton = require('material-ui/lib/svg-icons/navigation/menu');
let Colors = require('material-ui/lib/styles/colors');

class MyBarTitle extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	FontSize: "",
	    	Transform : ""
	    };
	    window.addEventListener("resize", (e) => this.render(e))
	}

	render() {
		// console.log("render", window.innerWidth, window.location.hash)
		var hash = window.location.hash.replace("#/", "")
			hash = hash ? hash : "home"
		this.state.title = this.props.title + (" __> " + hash )
		let barHeight = this.props.barHeight;
		let translateX = barHeight <= 50 ? 50 : (window.innerWidth > 760 ? 50 + barHeight / 10 : 50 - barHeight / 10)
		let translateY = barHeight <= 50 ? -40 : 12 / 25 * barHeight - 64
		let FontSize = 24 * ( 1+  barHeight / 300 )
		let transform = `translate( ${translateX}px, ${translateY}px )`
		let style = {
			transform: transform,
			margin:0,
			paddingTop:0,
			fontSize: FontSize,
			fontWeight:300
		}
		return (
			<h1 style={style}>
				{this.state.title}
			</h1>
		);
	}
}


class MyBarContent extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	"count": props.initialCount,
	    	"Height": this.props.Height
	    };
	    this.handleHeight(true)
	    // window.addEventListener('scroll',  this.handleScroll )
	    window.addEventListener('scroll',  (e) => this.handleScroll(e))
	    // window.addEventListener('scroll',  this.handleScroll.bind(this))
	}

	handleHeight(isInit) {
		let bodyTop = document.body.scrollTop;
		
		if ( this.state.Height - bodyTop < 50 ){
			if (isInit) {
				this.state.height = 50
			} else {
				this.setState({height: 50});	
			}
		}else {
			if (isInit) {
				this.state.height = this.state.Height - bodyTop
			} else {
				this.setState({
					height: this.state.Height - bodyTop
				});
			}
		}
	}

	handleScroll(event) {
		// console.log(event)
		this.handleHeight()
	}

	handleTitle() {

	}

	render() {
		var style={
			"height": this.state.height
		}
		if (this.state.height <= 50) {
			style.boxShadow = "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)"
		}else {
			style.boxShadow = ""
		}
		return (
			<div className="my-bar"
				 style={style} >
	    		<MyBarTitle 
	    			barHeight={this.state.height}
	    			title={this.props.title} />
	    	</div> 
		);
	}
}

MyBarContent.propTypes = { 
	onLeftIconButtonTouchTap: React.PropTypes.func
};

class MyBar extends React.Component {

	constructor(props) {
		super(props);
 		// this.props.Height = this.props.Height ? this.props.Height : this.props.initialHeight
	}
	
	render() {
	    return (
		    <div>
		    	<MyBarContent 
		    		// onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)}
		    		Height={this.props.Height}
		    		title={this.props.children}/>
	        	<div style={{
								"minHeight": this.props.Height ? this.props.Height : this.props.initialHeight
			        		}} >
				</div>
	      	</div>
	    );
	}

	// _onLeftIconButtonTouchTap(event) {
	// 	if (this.props.onLeftIconButtonTouchTap) {
	// 		this.props.onLeftIconButtonTouchTap(event);
	// 	}
	// }
}
MyBar.propTypes = { 
	initialCount: React.PropTypes.number,
	initialHeight: React.PropTypes.number,
	// onLeftIconButtonTouchTap: React.PropTypes.func
};

MyBar.defaultProps = {  
	initialHeight: 200
};

export default MyBar


