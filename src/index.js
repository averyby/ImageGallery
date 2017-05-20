import React from 'react';
import ReactDOM  from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import App from './App';
import userGalleries, * as fromUserGalleries from './reducers/userGalleries';
import demoGallery, * as fromDemoGallery from './reducers/demoGallery';

import road from './img/road.jpg';
import fox from './img/fox.jpg';
import sunset from './img/sunset.jpg';
import boy from './img/boy.jpg';
import boy1 from './img/boy1.jpg';

const images = [road, fox, sunset];

const reducer = combineReducers({
	demoGallery,
	userGalleries
});
const store = createStore(reducer, {
	demoGallery: {
		gallery: [road, fox, sunset],
		playing: true
	},
	userGalleries: [{
		gallery: [boy, boy1],
		playing: false
	}]
}, applyMiddleware(createLogger()));

export const getCurrentUserImage = (state, index) => {
	return fromUserGalleries.getCurrentUserImage(state.userGalleries, index);
};

export const getDemoGalleryStatus = (state) => {
	return fromDemoGallery.getDemoGalleryStatus(state.demoGallery);
};

export const getUserGalleryStatus = (state, index) => {
	return fromUserGalleries.getUserGalleryStatus(state.userGalleries, index);
};

export const getCurrentDemoImage = (state) => {
	return fromDemoGallery.getCurrentDemoImage(state.demoGallery);
};

export const getNumberOfUserGalleries = (state) => {
	return fromUserGalleries.getNumberOfUserGalleries(state.userGalleries);
};

export const getExistingImages = (state, index) => {
	return fromUserGalleries.getExistingImages(state.userGalleries, index);
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
