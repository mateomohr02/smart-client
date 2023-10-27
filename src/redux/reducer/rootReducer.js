import { combineReducers } from "redux";

import contactReducer from "./contactReducer";
import languageReducer from "./languageReducer"

const rootReducer = combineReducers({
    contactReducer,
    languageReducer
  });
  
  export default rootReducer;