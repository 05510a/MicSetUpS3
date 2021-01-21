import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import ProfileReducer from "./reducer/ProfileReducer";
const rootReducer = combineReducers({
  // Khai baos reducer
  ProfileReducer: ProfileReducer,
});
const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export default store;
