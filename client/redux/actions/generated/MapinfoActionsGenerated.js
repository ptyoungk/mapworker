/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN MapinfoActionsGenerated.js PLEASE EDIT ../MapinfoActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import MapinfoApi from "../../../api/MapinfoApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_MAPINFO };
  },

  //CRUD METHODS

  // Create mapinfo
  createMapinfo: function(mapinfo) {
    return function(dispatch) {
      return MapinfoApi
        .createMapinfo(mapinfo)
        .then(mapinfo => {
          dispatch(actionsFunction.createMapinfoSuccess(mapinfo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createMapinfoSuccess: function(mapinfo) {
    return { type: types.CREATE_MAPINFO_SUCCESS, payload: mapinfo };
  },


  // Delete mapinfo
  deleteMapinfo: function(id) {
    return function(dispatch) {
      return MapinfoApi
        .deleteMapinfo(id)
        .then(mapinfo => {
          dispatch(actionsFunction.deleteMapinfoSuccess(mapinfo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteMapinfoSuccess: function(mapinfo) {
    return { type: types.DELETE_MAPINFO_SUCCESS, payload: mapinfo };
  },


  // Find by _map_dteail
  findBy_map_dteail: function(key) {
    return function(dispatch) {
      return MapinfoApi
        .findBy_map_dteail(key)
        .then(item => {
          dispatch(actionsFunction.findBy_map_dteailSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_map_dteailSuccess: function(item) {
    return { type: types.FINDBY_MAP_DTEAIL_MAPINFO_SUCCESS, payload: item };
  },


  // Get mapinfo
  loadMapinfo: function(id) {
    return function(dispatch) {
      return MapinfoApi
        .getOneMapinfo(id)
        .then(mapinfo => {
          dispatch(actionsFunction.loadMapinfoSuccess(mapinfo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMapinfoSuccess: function(mapinfo) {
    return { type: types.GET_MAPINFO_SUCCESS, payload: mapinfo };
  },

  // Load  list
  loadMapinfoList: function() {
    return function(dispatch) {
      return MapinfoApi
        .getMapinfoList()
        .then(list => {
          dispatch(actionsFunction.loadMapinfoListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMapinfoListSuccess: function(list) {
    return { type: types.LIST_MAPINFO_SUCCESS, payload: list };
  },

	
  // Save mapinfo
  saveMapinfo: function(mapinfo) {
    return function(dispatch) {
      return MapinfoApi
        .saveMapinfo(mapinfo)
        .then(mapinfo => {
          dispatch(actionsFunction.saveMapinfoSuccess(mapinfo));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveMapinfoSuccess: function(mapinfo) {
    return { type: types.UPDATE_MAPINFO_SUCCESS, payload: mapinfo };
  },


};

export default actionsFunction;
