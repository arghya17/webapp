import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";
const rootReducer = combineReducers({
	mycounter: counterReducer,
	myauth: authReducer,
});

export default rootReducer;
