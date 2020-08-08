// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function mapinfoListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_MAPINFO_SUCCESS:
      return { ...state, listMapinfo: action.payload };
    case types.DELETE_MAPINFO_SUCCESS:
      return { ...state, mapinfo: action.payload };
    case types.CREATE_MAPINFO_SUCCESS:
      return { ...state, mapinfo: action.payload };
    case types.UPDATE_MAPINFO_SUCCESS:
      return { ...state, mapinfo: action.payload };
    case types.GET_MAPINFO_SUCCESS:
      return { ...state, mapinfo: action.payload };
    case types.FINDBY_MAP_DTEAIL_MAPINFO_SUCCESS:
      return { ...state, listMapinfo: action.payload };
    case types.UPDATE_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
    case types.GET_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
    case types.CREATE_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
    case types.LIST_MAP_DTEAIL_SUCCESS:
      return { ...state, listMap_dteail: action.payload };
    case types.DELETE_MAP_DTEAIL_SUCCESS:
      return { ...state, map_dteail: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}