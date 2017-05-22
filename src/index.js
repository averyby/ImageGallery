import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as fromUser from './reducers/userGalleries';
import * as fromDemo from './reducers/demoGallery';
import configureStore from './configureStore';

const createSelectorCreator = (mapping) => (selectorName) => (state, ownProps) => {
	const { demo, index } = ownProps || {};
	const { [selectorName]: selectorMapping } = mapping;
	return (
		demo 
		? selectorMapping.demoSelector(state.demoGallery)
		: selectorMapping.userSelector(state.userGalleries, index)
	);
};

const selectorCreator = createSelectorCreator({
	getCurrentImage: {
		demoSelector: fromDemo.getCurrentDemoImage,
		userSelector: fromUser.getCurrentUserImage
	},
	getPlayingStatus: {
		demoSelector: fromDemo.getDemoGalleryStatus,
		userSelector: fromUser.getUserGalleryStatus
	},
	getImageCount: {
		demoSelector: fromDemo.getDemoImageCount,
		userSelector: fromUser.getUserImageCount
	},
	getNumberOfUserGalleries: {
		demoSelector: null,
		userSelector: fromUser.getNumberOfUserGalleries
	},
	getExistingImages: {
		demoSelector: null,
		userSelector: fromUser.getExistingImages
	}
});
export const getCurrentImage = selectorCreator('getCurrentImage');
export const getPlayingStatus = selectorCreator('getPlayingStatus');
export const getImageCount = selectorCreator('getImageCount');
export const getNumberOfUserGalleries = selectorCreator('getNumberOfUserGalleries');
export const getExistingImages = selectorCreator('getExistingImages');
	
ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept()
}
