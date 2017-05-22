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


export const getCurrentDemoImage = (state) => getCurrentImage(state);
export const getDemoGalleryStatus = (state) => getPlayingStatus(state);
export const getDemoImageCount = (state) => getImageCount(state);

export default demoGallery;