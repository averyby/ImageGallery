import { saveUserData, deleteDataById } from '../indexedDB';

export const createGallery = () => (dispatch, getState) => { 
    dispatch({ type: 'ADD_GALLERY' });
    saveUserData(getState().userGalleries);
};
export const deleteGallery = (id) => (dispatch, getState) => { 
    dispatch({ type: 'DELETE_GALLERY', id });
    deleteDataById(id);
};

const actionCreatorTemplate = (type) => ({demo, id}) => ({ type, demo, id });

export const stopPlaying = actionCreatorTemplate('TOGGLE_PLAYING_STATUS');
export const startPlaying = actionCreatorTemplate('START_PLAYING');
export const togglePlaying = actionCreatorTemplate('TOGGLE_PLAYING');