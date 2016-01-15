"use strict"

import mainAction from '../actions/mainAction';

class WebAPI {

	constructor() {

	}

	loadMainData(url, method, body) {
		const req = new XMLHttpRequest()
		req.onload = function () {
			let data = ""
			if (req.status === 404) {
				
			} else {
				data = req.response;
			}
			mainAction.receiveData(data);
		}
		req.open(method, url)
		req.send(body)
	}
}

export default new WebAPI()