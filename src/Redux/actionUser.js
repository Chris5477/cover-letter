export const LOADING = "LOADING";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const ERROR_GET_DATA = "ERROR_GET_DATA";
export const ADD_CARD = "ADD_CARD";

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

const pushCard = (value) => {
	return {
		type: ADD_CARD,
		payload: value,
	};
};

export const callApi = (val, resolved) => {
	return (dispatch) => {
		dispatch(loading());
		resolved ? dispatch(getSuccess(val)) : dispatch(errorGet(val));
	};
};

export const pushCardInStore = (card) => {
	return (dispatch) => {
		dispatch(pushCard(card));
	};
};
