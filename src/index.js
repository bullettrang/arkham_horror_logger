import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// import {createStore,applyMiddleware,compose} from 'redux';
// import reducers from './reducers';
// import reduxThunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk)));
// console.log(store.getState());
// ReactDOM.render(<Provider store={store}><App/></Provider>,document.querySelector('#root'));

// console.log('dev stripe key is ',process.env.REACT_APP_STRIPE_KEY);
// console.log('environment is ',process.env.NODE_ENV);