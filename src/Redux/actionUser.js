/* istanbul ignore file */
export const LOADING = "LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const ERROR_GET_DATA = "ERROR_GET_DATA";

const loading = () => {
	return {
		type: LOADING,
	};
};

const getSuccess = (success) => {
	return {
		type: GET_DATA_SUCCESS,
		payload: success,
	};
};

const errorGet = (error) => {
	return {
		type: ERROR_GET_DATA,
		payload: error,
	};
};

export const callApi = (val, resolved) => {
	return (dispatch) => {
		dispatch(loading());
		resolved ? dispatch(getSuccess(val)) : dispatch(errorGet(val));
	};
};
