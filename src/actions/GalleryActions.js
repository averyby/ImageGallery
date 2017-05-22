export const createGallery 
        = () => ({
            type: 'ADD_GALLERY'
        });
export const deleteGallery
        = (index) => ({
            type: 'DELETE_GALLERY',
            index
        });
const actionCreatorTemplate = (type) => {
    return ({demo, index}) => ({ type, demo, index });
}

export const stopPlaying = actionCreatorTemplate('TOGGLE_PLAYING_STATUS');

export const startPlaying = actionCreatorTemplate('START_PLAYING');

export const togglePlaying = actionCreatorTemplate('TOGGLE_PLAYING');