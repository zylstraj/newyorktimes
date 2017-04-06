import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import NewsStories from './components/news_Stories';

import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <NewsStories />
  </Provider>, document.getElementById('container'));
