export const createGallery 
        = () => ({
            type: 'ADD_GALLERY'
        });

const actionCreatorTemplate = (type) => {
    return ({demo, index}) => ({ type, demo, index });
}

export const stopPlaying = actionCreatorTemplate('TOGGLE_PLAYING_STATUS');

export const startPlaying = actionCreatorTemplate('START_PLAYING');

export const togglePlaying = actionCreatorTemplate('TOGGLE_PLAYING');