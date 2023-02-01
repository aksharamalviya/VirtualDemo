import { querytype } from "../../constant"

const IntialState = () => ({
    User: [
       
    ]
})

export const UserReducer = (state = IntialState(), action) => {
    switch (action.type) {
        case querytype.ADD_USER:
            return {
                ...state,
                User: action.payload
            }
        case querytype.EDIT_USER:
            return {
                ...state,
                User: action.payload
            }
        case querytype.DELETE_USER:
            return {
                ...state,
                User: action.payload
            }
        default: return {
            ...state
        }
    }
}