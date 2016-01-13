
'use strict';

import React from 'react';
// import RaisedButton from 'material-ui/lib/raised-button';
import {render} from 'react-dom';

class LikeButton extends React.Component {

	constructor() {
		super();
		this.state = {
			liked: false
		}
	}

	handleClick() {
		this.setState({liked: !this.state.liked});
	}

	render() {

		var text = this.state.liked ? 'like' : 'haven\'t liked';

		return (
			// <p onClick={ this.handleClick.bind(this)}>
			<p onClick={() => this.handleClick()}>
				You {text} this. Click to toggle.
			</p>
		);
	}
}

// export default LikeButton;
//-----------------------------//

class Avatar extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
	        	<ProfilePic username={this.props.username} />
	        	<ProfileLink username={this.props.username} />
	      	</div>
	    );	
	}
}

class ProfilePic extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
      		<img src={'https://graph.facebook.com/' + this.props.username + '/picture'} />
    	);	
	}	
}

class ProfileLink extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<a href={'https://www.facebook.com/' + this.props.username}>
				{this.props.username}
			</a>
	    );	
	}
}

// export default Avatar;

class MyComponent extends React.Component {
	
	constructor() {
		super();
	}

	handleClick() {
		// Explicitly focus the text input using the raw DOM API.
		this.myTextInput.focus();
	}
	render() {
		// The ref attribute adds a reference to the component to
		// this.refs when the component is mounted.
		return (
			<div>
				<input type="text" ref={ (ref) => this.myTextInput = ref} />
				<input
					type="button"
					value="Focus the text input"
					onClick={ () => this.handleClick() }/>
			</div>
		);
	}
}

// ReactDOM.render(
// 	<LikeButton />,
// 	document.getElementById('example')
// );

// const MyAwesomeReactComponent = () => (
//   <RaisedButton label="Default" />
	// <LikeButton />
// );

// export default MyComponent;

export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {count: props.initialCount};
	}

	componentWillMount() {
		console.log(`will Mount ${new Date().getTime()}`)
	}

	componentDidMount() {
		console.log(`did Mount ${new Date().getTime()}`)
	}

	componentWillReceiveProps() {
		console.log(`componentWillReceiveProps ${new Date().getTime()}`)	
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(`shouldComponentUpdate ${new Date().getTime()}`)	
		console.log(nextProps, this.props)
		console.log(nextProps.id !== this.props.id)
		// return nextProps.id !== this.props.id;
		return true
	}

	componentWillUnmount () {
		console.log(`componentWillUnmount ${new Date().getTime()}`)		
	}

	tick() {
		this.setState({count: this.state.count + 1});
	}
	render() {
		return (
			<div onClick={this.tick.bind(this)}>
				Clicks: {this.state.count}
			</div>
		);
	}
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };

export default Counter