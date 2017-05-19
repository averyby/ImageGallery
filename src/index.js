import React from 'react';
import ReactDOM  from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import userGalleries, * as fromUserGalleries from './reducers/userGalleries';
import singleGallery, * as fromDemoGallery from './reducers/singleGallery';

import road from './img/road.jpg';
import fox from './img/fox.jpg';
import sunset from './img/sunset.jpg';


const images = [road, fox, sunset];

const reducer = combineReducers({
	demoGallery: singleGallery,
	userGalleries
});
const store = createStore(reducer, {
	demoGallery: [road, fox, sunset]
});

export const getCurrentUserImage = (state, index) => {
	return fromUserGalleries.getCurrentUserImage(state.userGalleries);
};

export const getCurrentDemoImage = (state) => {
	return fromDemoGallery.getCurrentDemoImage(state.demoGallery);
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
