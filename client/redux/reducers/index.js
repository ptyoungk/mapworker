import { combineReducers } from "redux";

// START IMPORT REDUCERS
import Map_dteailEditReducer from "./Map_dteailEditReducer";
import Map_dteailListReducer from "./Map_dteailListReducer";
import MapinfoListReducer from "./MapinfoListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	Map_dteailEditReducer,
	Map_dteailListReducer,
	MapinfoListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
