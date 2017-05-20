export const changeImage 
        = ({demo, index}) => ({
            type: 'BRING_UP_NEXT_IMAGE',
            demo,
            index
        });

export const addImages
        = ({index, images}) => ({
            type: 'ADD_IMAGE',
            index,
            images
        });
