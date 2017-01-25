import fetch from 'isomorphic-fetch';


/*
	fetch 默认参数配置，可在这里统一配置代理服务器请求格式
*/

const defaultOpts = {
	method: "POST",
	headers: {
		"content-type": "application/json;charset=utf-8",
	},
	credentials: 'same-origin', // fetch默认不支持响应set-cookie到浏览器，所以要配置一下
	mode: 'cors', // 配置为跨域

}

function serializeParam(obj) {
	var params = '?';
	var result = [];
	for ( var key in obj ) {

		if ( obj[key] != null && obj[key] !== 'undefined' ) {
			result.push(key + '=' + obj[key]);
		}

	};
	return params + result.join('&');
}

/*
@param url { String } 请求URL
@param data { Object } data
@param options { Object } fetch请求的配置，例如`method：'GET'`，可选
@return { Promise Object }
*/
function GET(url, data = {}, options = {}) {

	/*
		返回一个promise对象
	*/
	return fetch(
		url + serializeParam(data),
		Object.assign({}, defaultOpts, { method: 'GET' }, options )
	)
	.then( res => res.text() ) // 防止返回空对象，空对象会被解析为 {}
	.then( text => text ? JSON.parse(text) : {});
};

function POST(url, data = {}, options = {}) {
	/*
		返回一个promise对象
	*/
	return fetch(
		url,
		Object.assign({}, defaultOpts, { body: JSON.stringify(data), method: 'POST' }, options )
	)
	.then( res => res.text() )
	.then( text => text ? JSON.parse(text) : {});
};

function PATCH(url, data = {}, options = {}) {
  /*
   返回一个promise对象
   */
  return fetch(
    url,
    Object.assign({}, defaultOpts, { body: JSON.stringify(data), method: 'PATCH' }, options )
  )
    .then( res => res.text() )
    .then( text => text ? JSON.parse(text) : {});
};

function PUT(url, data = {}, options = {}) {
	/*
		返回一个promise对象
	*/
	return fetch(
		url,
		Object.assign({}, defaultOpts, { body: JSON.stringify(data), method: 'PUT' }, options )
	)
	.then( res => res.text() )
	.then( text => text ? JSON.parse(text) : {});
};

function DELETE(url, data = {}, options = {}) {
	/*
		返回一个promise对象
	*/
	return fetch(
		url,
		Object.assign({}, defaultOpts, { body: JSON.stringify(data), method: 'DELETE' }, options )
	)
	.then( res => res.text() )
	.then( text => text ? JSON.parse(text) : {});
};


const Fetch = {
	POST,
	GET,
  PATCH,
	PUT,
	DELETE,
}

export default Fetch;



