import { createStore, applyMiddleware } from 'redux';
import RootReducer from './Reducers';

const Store = createStore(RootReducer)