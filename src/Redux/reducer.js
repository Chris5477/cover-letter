import { LOADING, GET_DATA_SUCCESS, ERROR_GET_DATA } from "./actionUser"

const initialState = {
    loading : false,
    dataUser : {},
    error : ""
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING : 
        return {
            ...state,
            loading : true
        }

        case GET_DATA_SUCCESS : 
        return {
            ...state,
            loading : false,
            dataUser : state.dataUser = action.payload,
            error : ""
        }

        case ERROR_GET_DATA : 
        return {
            ...state,
            loading : false,
            dataUser : {},
            error : action.payload
        }

        default : return state

    }
}