import singleGallery from './singleGallery';

const userGalleries = (state = [], action) => {
    if (action.demo) return;
    let newState = state.slice();
    switch(action.type) {
        case 'ADD_GALLERY':
            newState.push([]);
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
    return state[index][0];
};

export const getNumberOfUserGalleries = (state) => {
    return state.length;
};

export default userGalleries;