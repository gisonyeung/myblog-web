import { combineReducers } from "redux";
import blog from "./blog";
import site from "./site";

const rootReducer = combineReducers({
	blog,
	site,
});
export default rootReducer;