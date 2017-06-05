import { saveUserData } from '../indexedDB';

export const 
changeImage = ({demo, id}) =>  ({ 
    type: 'BRING_UP_NEXT_IMAGE',
    demo,
    id
});

export const 
addImages = ({id, images}) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_IMAGE',
        id,
        images
    });
    saveUserData(getState().userGalleries);
}
