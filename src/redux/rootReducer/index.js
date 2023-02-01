import { combineReducers } from "redux";
import { UserReducer } from "../reducer";

const rootReducer = combineReducers({
    user:UserReducer,
})

export default rootReducer