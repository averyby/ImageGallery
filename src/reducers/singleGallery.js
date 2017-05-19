import { combineReducers } from 'redux';

const gallery = (state = [], action) => {
    let newState = state.slice();
	switch(action.type) {
		case 'BRING_UP_NEXT_IMAGE':
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
		case 'TOGGLE_PLAYING_STATUS':
			return !state;
		default: 
			return state;
	}
};

const singleGallery = combineReducers({
	playing,
	gallery
});

export const getCurrentImage = (state) => {
	return state.gallery && state.gallery[0];
};

export const getPlayingStatus = (state) => {
	return state.playing;
};

export default singleGallery;