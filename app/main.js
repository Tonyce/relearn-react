'use strict';


import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, IndexRoute, IndexRedirect, Route, Link } from 'react-router';


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
	}

	render() {
		return (
			<nav className="flex-layout h-center v-between">
				<div>
					<Link className="center" to="/">INDEX</Link>
				</div>
				<div className="center">
					<Link className="center" to="/about" activeClassName='animate'>ABOUT</Link>
					<Link className="center" to="/schedule" activeClassName='animate'>SCHEDULE</Link>
				</div>	
			</nav>
		);
	}
}

class App extends React.Component {
	render() {
		
		let { header, main } = this.props;
		main = <div id="main" key={this.props.location.pathname}>{main}</div>;
		
		return (
			<div>
				<header className="flex-layout column v-between">
					<Nav />
					<div className="header-nav">
						{ header }
					</div>
				</header>

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
