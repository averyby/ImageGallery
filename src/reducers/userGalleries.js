import singleGallery, { getCurrentImage, getPlayingStatus } from './singleGallery';

const userGalleries = (state = [], action) => {
    // bypass actions triggered by the demo gallery
    if (action.demo) return state;
    let newState = state.slice();
    switch(action.type) {
        case 'ADD_GALLERY':
            newState.push({playing: true, gallery: []});
            break;
        case 'BRING_UP_NEXT_IMAGE':
        case 'ADD_IMAGE':
            newState = [
                ...state.slice(0, action.index),
                singleGallery(state[action.index], action),
                ...state.slice(action.index + 1)
            ];
            break;
        default:
            return state;
    }
    return newState;
};

export const getCurrentUserImage = (state, index) => {
    return getCurrentImage(state[index]);
};

export const getUserGalleryStatus = (state, index) => {
    return getPlayingStatus(state[index]);
};

export const getNumberOfUserGalleries = (state) => {
    return state.length;
};

export default userGalleries;