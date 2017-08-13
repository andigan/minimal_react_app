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

// components
import PageContainer from './components/page-container';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(ReduxPromise)
));

ReactDOM.render(
  <Provider store={store}>
    <PageContainer />
  </Provider>, document.getElementById('app')
);
