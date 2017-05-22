import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as fromUserGalleries from './reducers/userGalleries';
import * as fromDemoGallery from './reducers/demoGallery';
import configureStore from './configureStore';

export const getCurrentImage = (state, ownProps) => {
	const { demo, index } = ownProps;
	return (
		demo 
		? fromDemoGallery.getCurrentDemoImage(state.demoGallery) 
		: fromUserGalleries.getCurrentUserImage(state.userGalleries, index)
	);
};

export const getPlayingStatus = (state, ownProps) => {
	const { demo, index } = ownProps;
	return (
		demo 
		? fromDemoGallery.getDemoGalleryStatus(state.demoGallery) 
		: fromUserGalleries.getUserGalleryStatus(state.userGalleries, index)
	);
};

export const getImageCount = (state, ownProps) => {
	const { demo, index } = ownProps;
	return (
		demo 
		? fromDemoGallery.getDemoImageCount(state.demoGallery) 
		: fromUserGalleries.getUserImageCount(state.userGalleries, index)
	);
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
