import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import composeWithDevTools from 'redux-devtools-extension'
import tasks from './reducers'

import App from "./components/app/App";
import './index.css'


const store = createStore(tasks,/*composeWithDevTools(applyMiddleware(thunk))*/
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("react-id"))
