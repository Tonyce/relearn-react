
"use strict";

import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

class Header extends React.Component {

	constructor() {
		super();
	}

	render() {
		// const { schedule, item } = this.props.params
		// console.log(schedule, item);
		return (
			<div>
				<h3>Schdule</h3>
				<div className="header-as flex-layout h-center ">
					<Link to={`/schedule/day1`} className="center" activeClassName='animate'>day1</Link>
					<Link to={`/schedule/day2`} className="center" activeClassName='animate'>day2</Link>
					<Link to={`/schedule/day3`} className="center" activeClassName='animate'>day3</Link>
					<Link to={`/schedule/day4`} className="center" activeClassName='animate'>day4</Link>
				</div>
				
			</div>
		);
	}
}

export default Header