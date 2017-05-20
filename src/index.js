import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as fromUserGalleries from './reducers/userGalleries';
import * as fromDemoGallery from './reducers/demoGallery';
import configureStore from './configureStore';

export const getCurrentUserImage = (state, index) => {
	return fromUserGalleries.getCurrentUserImage(state.userGalleries, index);
};

export const getCurrentDemoImage = (state) => {
	return fromDemoGallery.getCurrentDemoImage(state.demoGallery);
};

export const getDemoGalleryStatus = (state) => {
	return fromDemoGallery.getDemoGalleryStatus(state.demoGallery);
};

export const getUserGalleryStatus = (state, index) => {
	return fromUserGalleries.getUserGalleryStatus(state.userGalleries, index);
};

export const getNumberOfUserGalleries = (state) => {
	return fromUserGalleries.getNumberOfUserGalleries(state.userGalleries);
};

export const getExistingImages = (state, index) => {
	return fromUserGalleries.getExistingImages(state.userGalleries, index);
};
ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept()
}
