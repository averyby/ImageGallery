export const createGallery = () => ({ type: 'ADD_GALLERY' });
export const deleteGallery = (id) => ({ type: 'DELETE_GALLERY', id });

const actionCreatorTemplate = (type) => ({demo, id}) => ({ type, demo, id });

export const stopPlaying = actionCreatorTemplate('TOGGLE_PLAYING_STATUS');
export const startPlaying = actionCreatorTemplate('START_PLAYING');
export const togglePlaying = actionCreatorTemplate('TOGGLE_PLAYING');