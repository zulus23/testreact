import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import tasks from './reducers'

import App from "./components/app/App";
const store = createStore(tasks);




ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("react-id"))
