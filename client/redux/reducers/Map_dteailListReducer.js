// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function map_dteailListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
    case types.LIST_MAP_DTEAIL_SUCCESS:
      return { ...state, listMap_dteail: action.payload };
    case types.CHANGEPASSWORD_USER_SUCCESS:
      return { ...state, changePassword: action.payload };
    case types.LIST_USER_SUCCESS:
      return { ...state, listUser: action.payload };
    case types.DELETE_USER_SUCCESS:
      return { ...state, user: action.payload };
    case types.CREATE_USER_SUCCESS:
      return { ...state, user: action.payload };
    case types.UPDATE_USER_SUCCESS:
      return { ...state, user: action.payload };
    case types.GET_USER_SUCCESS:
      return { ...state, user: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}