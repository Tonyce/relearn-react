'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, IndexRoute, IndexRedirect, Route, Link } from 'react-router';
// import $ from 'jquery';

import IndexHeader from './components/index/Header';
import AboutHeader from './components/about/Header';
import ScheduleHeader from './components/schedule/Header';

import IndexMain from './components/index/Main';
import AboutMain from './components/about/Main';
import ScheduleMain from './components/schedule/Main';
import ScheduleItem from './components/schedule/Item';

import Footer from './components/Footer';

import './main.css'

// const ACTIVE = { 'width': '100%' }

class Nav extends React.Component {
	
	constructor() {
		super();
		// this._changeHeader = this._changeHeader.bind(this);
	}

	// componentDidMount() {
	// 	window.addEventListener('changeHeader', this._changeHeader );
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('changeHeader', this._changeHeader );
	// }

	changeHeader(event) {
		// alert("changeHeader")
		// console.log("nav")
		// console.log(event)
		if (this.props.changeHeader) {
			this.props.changeHeader(event);
		}
	}

	render() {
		return (
			<nav className="flex-layout h-center v-between">
				<div>
					<Link className="center" to="/">INDEX</Link>
				</div>
				<div className="center">
					<Link className="center" to="/about" activeClassName='animate' 
						onClick={ this.changeHeader.bind(this) }>
						ABOUT
					</Link>
					<Link className="center" to="/schedule" activeClassName='animate' 
						onClick={ (event) => this.changeHeader(event) }>
						SCHEDULE
					</Link>
				</div>	
			</nav>
		);
	}
}

Nav.propTypes = { 
	changeHeader: React.PropTypes.func
};

class Header extends React.Component {

	constructor() {
		super();
		this.state = {
			bg: "#00BCD4",
			animateStyle: {}
		}
	}

	componentDidMount() {

	}
	
	componentWillMount() {
		this.stepTime = 20;
		this.docBody = document.body;
		this.focElem = document.documentElement;
	}

	animatedCircle (x, y , bg, speed) {
		let header = document.getElementsByTagName('header')[0];
		let width = header.clientWidth;
    	let height = header.clientHeight;

    	// alert(`${width}, ${x}, ${y}`)

		let r = Math.sqrt(width * width + height * height);

		let animateStyle = {
			backgroundColor: bg,
			left: x,
			top: y,
			width: (r * 2),
			height: (r * 2),
			marginLeft: -r,
			marginTop: -r,
			transition: 'all 0.5s linear'
		}

		this.setState({
			animateStyle: animateStyle
		});

		let timer = setTimeout(() => {
			this.setState({
				bg: bg,
				animateStyle: {},
				headerNav: {
					opacity: 1.0
				}
			})
			clearTimeout(timer);
		}, 500);
	}

	changeBg(event) {
		this.setState({
			headerNav: {
				opacity: 0.0
			}
		})
		let bg = this.state.bg === "#607D8B" ? "00BCD4" : "#607D8B"
		this.animatedCircle( event.pageX, event.pageY, bg, 1000);
	}

	render() {
		return (
			<header id="header" style={{ backgroundColor: this.state.bg}}>
				<Nav changeHeader={ (event) => this.changeBg(event) }/>
				<div className="header-nav">
					{ this.props.children }
				</div>
				<div className="circle" style={this.state.animateStyle}></div>
			</header>
		)
	}
}


class App extends React.Component {
	render() {
		
		let { header, main } = this.props;
		main = <div id="main" key={this.props.location.pathname}>{main}</div>;
		
		return (
			<div>
				
				<Header>
					{header}
				</Header>

			 	<ReactCSSTransitionGroup
					component="div"
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={500}>
						{ main }
				</ReactCSSTransitionGroup>

				<Footer />
				
			</div>
		)
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute components={{ main: IndexMain }}></IndexRoute>
			<Route path="about" components={{ header: AboutHeader, main: AboutMain }}></Route>
			<Route path="schedule" components={{ header: ScheduleHeader, main: ScheduleMain }}>
				<IndexRedirect to="day1" />
				<Route path=":item" component={ScheduleItem} />
			</Route>
		</Route>
	</Router>
), document.getElementById('app'))
