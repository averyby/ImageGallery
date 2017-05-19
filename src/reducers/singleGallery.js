const singleGallery = (state = [], action) => {
    let newState = state.slice();
	switch(action.type) {
		case 'BRING_UP_NEXT_IMAGE':
				newState.push(newState.shift());
				break;
        case 'ADD_IMAGE':
                newState.unshift(...action.images);
                break;
		default: 
			return state;
	}
	return newState;
};

export default singleGallery;