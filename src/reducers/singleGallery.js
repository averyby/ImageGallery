import { combineReducers } from 'redux';

const gallery = (state = [], action) => {
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
	gallery
});

export const getCurrentImage = (state) => {
	const target = state.gallery && state.gallery[0];
	/*
	** If target is an object with an imgUrl property, 
	** we're requesting user images. Otherwise, the target 
	** is the demo image url.
	*/
	return (target && target.imgUrl) || target;
};

export const getImageCount = (state) => (state.gallery && state.gallery.length) || 0;

export const getPlayingStatus = (state) => state.playing;

export const getAllImages = (state) => state.gallery;

export default singleGallery;