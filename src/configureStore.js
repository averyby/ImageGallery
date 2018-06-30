import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import uuidV4 from 'uuid/v4';
import userGalleries from './reducers/userGalleries';
import demoGallery from './reducers/demoGallery';

import fox from './img/Fox.jpg';
import road from './img/road.jpg';
import sunset from './img/sunset.jpg';

export default () => {
    const reducer = combineReducers({
        demoGallery,
        userGalleries
    });
    const middlewares = [];
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(reducer, {
        demoGallery: {
            images: [fox, road, sunset],
            playing: true,
            id: uuidV4()
        }
    }, applyMiddleware(...middlewares));
};