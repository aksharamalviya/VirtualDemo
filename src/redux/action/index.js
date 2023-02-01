import { querytype } from "../../constant";

export const Add = (data) => {
    return function (dispatch) {
        dispatch({ type: querytype.ADD_USER, payload: data })
    }

}

export const Edit = (data) => {
    return function (dispatch) {
        dispatch({ type: querytype.EDIT_USER, payload: data })
    }

}

export const Delete = (data) => {
    return function (dispatch) {
        dispatch({ type: querytype.DELETE_USER, payload: data })
    }

}