import { combineReducers } from "redux";
import authreducer from "./authreducer"
import errorsReducer from "./errorsReducer"
import profileReducer from "./profilereducer"



export default combineReducers({
    auth:authreducer,
    errors: errorsReducer,
    profiles: profileReducer

})