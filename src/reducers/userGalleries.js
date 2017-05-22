import uuidV4 from 'uuid/v4';
import singleGallery, {
    getCurrentImage, 
    getPlayingStatus, 
    getAllImages,
    getImageCount 
} from './singleGallery';

const removeItemByKey = (state, id) => {
    const o = {};
    for (let key in state) {
        if (key !== id) o[key] = state[key];
    }
    return o;
};

const userGalleries = (state = {}, action) => {
    // bypass actions triggered by the demo gallery
    if (action.demo) return state;
    switch(action.type) {
        case 'ADD_GALLERY':
            const id = uuidV4();
            return {
                ...state, 
                [id]: { id, playing: true, images: [] }
            };
        case 'DELETE_GALLERY':
            return removeItemByKey(state, action.id);
        case 'BRING_UP_NEXT_IMAGE':
        case 'START_PLAYING':
        case 'STOP_PLAYING':
        case 'TOGGLE_PLAYING':
        case 'ADD_IMAGE':
            return Object.assign({}, state, {
                [action.id]: singleGallery(state[action.id], action)
            });
        default:
            return state;
    }
};

const selectorCreator = (selector) => (state, id) => selector(state[id]);

export const getCurrentUserImage = selectorCreator(getCurrentImage);

export const getUserGalleryStatus = selectorCreator(getPlayingStatus);

export const getUserImageCount = selectorCreator(getImageCount);

export const getExistingImages = selectorCreator(getAllImages);

export const getUserGalleries = (state) => state;

export default userGalleries;