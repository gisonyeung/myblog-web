/*
	异步请求 action creator
*/

// 请求中
function requestAction(type) {
	return {
		type,
	}
}

// 请求成功
function receiveAction(type, data = {}) {
	return {
		type,
		payload: data,
	}
}

// 请求失败
function failAction(type, err) {
	return {
		type,
		payload: err
	}
}

const network = {
	requestAction,
	receiveAction,
	failAction,
}

export default network;