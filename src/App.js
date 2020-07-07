import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import TodoApp from './TodoApp';

let root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>, 
    document.getElementById('root')
);