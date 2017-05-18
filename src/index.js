import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import road from './img/road.jpg';
import fox from './img/fox.jpg';
import sunset from './img/sunset.jpg';

const reducer = (state = [], action) => {
	switch(action.type) {
		case 'BRING_UP_NEXT_IMAGE':
				state = state.concat(state.shift());
				break;
		default: 
			return state;
	}
	return state;
};

const images = [road, fox, sunset];
const store = createStore(reducer, images);

export const getCurrentImage = (state) => {
	return state[0];
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept()
}
