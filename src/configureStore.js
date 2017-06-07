import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import uuidV4 from 'uuid/v4';
import userGalleries from './reducers/userGalleries';
import demoGallery from './reducers/demoGallery';
import { retrieveUserData } from './indexedDB';

import fox from './img/Fox.jpg';
import road from './img/road.jpg';
import sunset from './img/sunset.jpg';

debugger;
export default async () => {
    const reducer = combineReducers({
        demoGallery,
        userGalleries
    });
    const middlewares = [thunk];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    const userData = await retrieveUserData();
    const store = createStore(reducer, {
        demoGallery: {
            images: [fox, road, sunset],
            playing: true,
            id: uuidV4()
        },
        userGalleries: userData
    }, applyMiddleware(...middlewares));

    return store;
};