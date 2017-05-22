import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import userGalleries from './reducers/userGalleries';
import demoGallery from './reducers/demoGallery';

import boy1 from './img/boy1.jpg';
import boy2 from './img/boy2.jpg';
import boy3 from './img/boy3.jpg';
import boy4 from './img/boy4.jpg';
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
        // middlewares.push(createLogger());
    }

    return createStore(reducer, {
        demoGallery: {
            // gallery: [boy1, boy2, boy3, boy4],
            gallery: [fox, road, sunset],
            playing: true
        }
    }, applyMiddleware(...middlewares));
};