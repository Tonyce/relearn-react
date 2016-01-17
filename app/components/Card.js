
"use strict";

import React from 'react';
import {render} from 'react-dom';

class Card extends React.Component {

	constructor() {
		super();
		this.state = {
			content: "",
			other: "",
		}
	}

	componentWillReceiveProps (nextProps) {
		let cardContent = nextProps.children;
		cardContent = JSON.parse(cardContent);
		this.setState({
			content: cardContent.content,
			other: cardContent.other
		})
    }

	render() {
		// console.log(this.props.path)
		return (
			<div className="card flex-layout column v-between">
				<div className="flex-layout column v-center" 
					dangerouslySetInnerHTML={{
            			__html: this.state.content
          		}} />
				<div className="other flex-layout h-center">
					<a>{this.state.other}</a>
				</div>
			</div>
		);
	}
}

export default Card