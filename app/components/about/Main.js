
"use strict";

import React from 'react';
import {render} from 'react-dom';
import Card from '../Card';

import mainStore from '../../stores/mainStore';
import mainAction from '../../actions/mainAction';
 

class Main extends React.Component {

	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this.state = {
			card: ""
		}
		// console.log("about card")
	}

	componentDidMount() {
		// console.log("about didMount")
		mainStore.addChangeListener( this._onChange );
    	mainAction.loadData("data/aboutmain.json", "GET", "");
	}

	componentWillUnmount() {
		// console.log("about WillUnmount")
	    mainStore.removeChangeListener( this._onChange );
	}

	_onChange() {
		this.setState({ 
			card: mainStore.getMainData()
		}); 
	}

	render() {
		return (
			<div>
				<Card>
					{this.state.card}
				</Card>

				<div id="main-content" className="flex-layout row">
					<div className="left">
						<img src="http://img5.duitang.com/uploads/item/201408/12/20140812133247_zcLCB.jpeg" />
					</div>

					<div className="right flex-layout column">
						<div>
							<img src="http://img2.duitang.com/uploads/item/201208/18/20120818150713_zarnG.jpeg" />
						</div>
						<div>
							<img src="http://upload.chinaz.com/2015/1222/1450757174825.jpg" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Main