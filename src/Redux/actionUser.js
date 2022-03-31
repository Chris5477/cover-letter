export const LOADING = "LOADING"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const ERROR_GET_DATA = "ERROR_GET_DATA"

const loading = () => {
    return {
        type : LOADING
    }
}

const getSuccess = () => {
    return {
        type : GET_DATA_SUCCESS
    }
}

const errorGet = () => {
    return {
        type : ERROR_GET_DATA
    }
}

