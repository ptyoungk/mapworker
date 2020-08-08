// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  map_dteail: {}
};

// Reducer
export default function map_dteailEditEditReducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
    case types.UPDATE_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
    case types.GET_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
    case types.FINDBY_MAP_DTEAIL_MAPINFO_SUCCESS:
      return { ...state, listMapinfo: action.payload };
     // END REDUCERS
    
    case types.RESET_MAP_DTEAIL:
      state = initialState;
      return state;
    default:
      return state;
  }
}