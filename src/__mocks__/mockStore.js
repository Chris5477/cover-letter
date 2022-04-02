import { applyMiddleware, createStore } from "redux";
import { LOADING, GET_DATA_SUCCESS, ERROR_GET_DATA } from "../Redux/actionUser";
import thunk from "redux-thunk";

const mockState = {
	loading: false,
	dataUser: {
		user: {
			_id: "6248641e1c10910b1f383873",
			pseudo: "mockPseudo",
			password: "mockpassword",
			cards: [{
				name : "HTML",
				desription : "Concevoir une maquette"
			}],
		},
	},
	error: "",
};

export const mockReducer = (state = mockState, action) => {
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

		default:
			return state;
	}
};

                export const store = createStore(mockReducer, applyMiddleware(thunk));