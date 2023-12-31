import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {applyMiddleware, compose} from 'redux';
import {legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';

import reducers from './Reducers';

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);