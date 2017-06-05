import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import uuidV4 from 'uuid/v4';
import userGalleries from './reducers/userGalleries';
import demoGallery from './reducers/demoGallery';
import { retrieveUserData } from './indexedDB';

import boy1 from './img/boy1.jpg';
import boy2 from './img/boy2.jpg';
import boy3 from './img/boy3.jpg';
import boy4 from './img/boy4.jpg';
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
    debugger;
    const store = createStore(reducer, {
        demoGallery: {
            images: [boy1, boy2, boy3, boy4],
            // images: [fox, road, sunset],
            playing: true,
            id: uuidV4()
        },
        userGalleries: userData
    }, applyMiddleware(...middlewares));

    store.dispatch = ((store) => {
        const prevDispatch = store.dispatch;
        return (action) => {
            prevDispatch(action);
            console.log('hello');
        };
    })(store);
    return store;
};