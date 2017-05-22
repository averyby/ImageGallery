export const 
changeImage = ({demo, id}) => ({ 
    type: 'BRING_UP_NEXT_IMAGE',
    demo,
    id
});

export const 
addImages = ({id, images}) => ({
    type: 'ADD_IMAGE',
    id,
    images
});
