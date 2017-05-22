import { combineReducers } from 'redux';
import uuidV4 from 'uuid/v4';

const images = (state = [], action) => {
    let newState = state.slice();
	switch(action.type) {
		case 'BRING_UP_NEXT_IMAGE':
				if (!newState.length) return state;
				newState.push(newState.shift());
				break;
        case 'ADD_IMAGE':
                newState.unshift(...action.images);
                break;
		default: 
			return state;
	}
	return newState;
};

const playing = (state = true, action) => {
	switch(action.type) {
		case 'START_PLAYING':  return true;
		case 'STOP_PLAYING': return false;
		case 'TOGGLE_PLAYING': return !state;
		default: return state;
	}
};

const singleGallery = combineReducers({
	playing,
	images,
	id: (state = uuidV4()) => state
});

export const getCurrentImage = (state) => {
	const target = state.images && state.images[0];
	/*
	** If target is an object with an imgUrl property, 
	** we're requesting user images. Otherwise, the target 
	** is the demo image url.
	*/
	return (target && target.imgUrl) || target;
};

export const getImageCount = (state) => (state.images && state.images.length) || 0;

export const getPlayingStatus = (state) => state.playing;

export const getAllImages = (state) => state.images;

export default singleGallery;