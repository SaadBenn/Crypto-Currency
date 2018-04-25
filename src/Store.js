import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './Reducers';
import { Platform } from 'react-native';

import devTools from 'remote-redux-devtools';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import RootReducer from './Reducers';


let middleware = applyMiddleware(thunk, promise, logger);

let Store = createStore(RootReducer, 
	compose(
		middleware,
		devTools({
			name: Platform.OS,
			hostname: 'localhost',
			port: 5678
		}),
	)
);


export default Store;