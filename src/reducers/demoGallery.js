import singleGallery, { 
    getCurrentImage, 
    getPlayingStatus,
    getImageCount 
} from './singleGallery';

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

export const getDemoImageCount = (state) => {
    return getImageCount(state);
};

export default demoGallery;