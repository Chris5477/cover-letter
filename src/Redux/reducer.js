import { LOADING, GET_DATA_SUCCESS, ERROR_GET_DATA, ADD_CARD } from "./actionUser";

const initialState = {
	loading: false,
	dataUser: {},
	cards: [],
	error: "",
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADING:
			return {
				...state,
				loading: true,
			};

		case GET_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				dataUser: action.payload,
				error: "",
			};

		case ERROR_GET_DATA:
			return {
				...state,
				loading: false,
				dataUser: {},
				error: action.payload,
			};

		case ADD_CARD: {
			return {
				...state,
				cards: [...state.cards, action.payload],
			};
		}
		default:
			return state;
	}
};
