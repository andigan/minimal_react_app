// core react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider }  from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxPromise from 'redux-promise';

// reducers
import rootReducer from './reducers/root-reducer'

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise)
));

ReactDOM.render(
  <Provider store={store}>
    <div> HELLO </div>
  </Provider>, document.getElementById('app')
);
