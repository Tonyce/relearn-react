
"use strict"

import {Dispatcher} from 'flux';

class SmallDispatcher extends Dispatcher {
	handleServerAction(action) {
		let payload = {
			// source: "serverAction",
			action: action
		}
		this.dispatch(payload)
	}

	handleViewAction(action) {
		let payload = {
			// source: "viewAction"
			action: action
		}
		this.dispatch(payload)
	}
}

export default new SmallDispatcher()