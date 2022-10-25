import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducer from './reducers';
import homesReducers from './reducers/homesReducers';
console.log(homesReducers)

const store = createStore(
    homesReducers,
    compose( applyMiddleware(thunk),

        typeof window === 'object' && 
            typeof window._REDUX_DEVTOOLS_EXTENSION_ !== 'undefined' ?
                window._REDUX_DEVTOOLS_EXTENSION_() : f => f
    )
);

export default store