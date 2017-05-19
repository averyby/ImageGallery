import singleGallery, { getCurrentImage, getPlayingStatus } from './singleGallery';

const demoGallery = (state = {}, action) => {
    // bypass actions triggered by user galleries
	if (!action.demo) return state; 
    return singleGallery(state, action);
};


export const getCurrentDemoImage = (state) => {
    return getCurrentImage(state);
};

export const getDemoGalleryStatus = (state) => {
    return getPlayingStatus(state);
};

export default demoGallery;