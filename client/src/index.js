import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';

import configureStore from './redux/store/configStore'

import App from './App';

const store=configureStore()

//for testing purpose
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())

const jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));