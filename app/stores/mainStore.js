"use strict"

import EventEmitter from 'events';
import smallAppDispatcher from '../dispatcher/smallAppDispatcher'

const CHANGE_EVENT = 'change';

var mainData = "";

class MainStore extends EventEmitter {
	constructor() {
		super();
		// this.on('newListener', (event, listener) => {
		// 	console.log('newListener', event);
		// });

		// this.on("removeListener", () => {
		// 	console.log("removeListener");
		// })
	}

	emitChange() {
		this.emit(CHANGE_EVENT)
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		// console.log("removeChangeListener action")
		this.removeListener(CHANGE_EVENT, callback)
	}

	getMainData() {
		return mainData
	}
}

let mainStore = new MainStore()

mainStore.dispatchToken = smallAppDispatcher.register(payload => {
	let action = payload.action
	switch (action.type) {
		case 'loadMainData': 
			// could show loding...
			break;
		case 'receiveMainData': {
			mainData = action.data;
			mainStore.emitChange();
		}
      		break;
      	default: 
      		return
	}
	return true;
})

export default mainStore
