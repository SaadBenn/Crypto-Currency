import {
	FETCHING_DATA,
	FETCHING_DATA_SUCCESS,
	FETCHING_DATA_FAIL
} from './../Actions/ActionTypes';

const initialState = {
	isFetching: null,
	data: [],
	hasError: false,
	errorMessage: null,
};

export default function(state = initialState , action) {

	switch(action.type) {

		case FETCHING_DATA:
			return Object.assign({}, state, {
				isFetching: true,
				data: null,
				hasError: false,
				errorMessage: null
		});

		case FETCHING_DATA_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.payload,
				hasError: false,
				errorMessage: null
		});

		case FETCHING_DATA_FAIL:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.payload,
				hasError: true,
				errorMessage: action.err
		});
			
	default:		
		return state;
	}
	
}