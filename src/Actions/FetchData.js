import axios from 'axios';
import { apiBaseURL } from '../../CryptoAPI';

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