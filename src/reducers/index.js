import { combineReducers } from "redux";
import blog from "./blog";
import site from "./site";
import comment from "./comment";

const rootReducer = combineReducers({
	blog,
	site,
	comment,
});
export default rootReducer;