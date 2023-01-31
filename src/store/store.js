import { createStore, applyMiddleware } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducerEnhancer from '../enhancers/monitorReducer';
import loggerMiddleware from '../middleware/logger';
import rootReducer from '../reducers';

/*export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const enhancers = [middlewareEnhancer, monitorReducerEnhancer];
    const composedEnhancers = composeWithDevTools(...enhancers);

    const store = createStore(rootReducer, preloadedState, composedEnhancers);

    if (ProcessingInstruction.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
}*/

export default function configureAppStore(preloadedState) {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [loggerMiddleware, ...getDefaultMiddleware()],
        preloadedState,
        enhancers: [monitorReducerEnhancer]
    });

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(rootReducer))
    }

    return store;
}

// const middleware = [thunk];
// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;