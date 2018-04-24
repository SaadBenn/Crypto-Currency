import axios from 'axios';
import { apiBaseURL } from '../../CryptoAPI';
import  {
	FETCHING_DATA,
	FETCHING_DATA_SUCCESS,
	FETCHING_DATA_FAIL
} from './ActionTypes';

export default function FetchData() {
	return dispatch => {
		dispatch({ type: FETCHING_DATA })

		return axios.get('${apiBaseURL}/v1/ticker/?limit=10')
			.then(res => {
				dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data})
			})
			.catch(err => {
				dispatch({type: FETCHING_DATA_FAIL, payload: err.data })
			});
	}
}