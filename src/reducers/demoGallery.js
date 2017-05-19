import singleGallery from './singleGallery';

const demoGallery = (state = [], action) => {
    // bypass actions triggered by user galleries
	if (!action.demo) return state; 
    return singleGallery(state, action);
};

export const getCurrentDemoImage = (state) => {
    return state[0];
};

export default demoGallery;