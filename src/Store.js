import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './Reducers';
import { Platform } from 'react-native';
import devTools from 'remote-redux-devtools';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const Store = createStore(RootReducer)