var messages = require('./greeting.js');
import {multiply} from './mathStuff.js';
import $ from 'jquery';

var style = require('./style/globalStyle.scss');

import React from 'react';
import ReactDOM  from 'react-dom';

ReactDOM.render(
	<h1>Hello, world!</h1>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept()
}
