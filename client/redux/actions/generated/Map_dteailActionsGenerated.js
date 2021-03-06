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
 *  TO CUSTOMIZE FUNCTIONS IN Map_dteailActionsGenerated.js PLEASE EDIT ../Map_dteailActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import Map_dteailApi from "../../../api/Map_dteailApi";

let actionsFunction = {
  
  // Reset reducer
  reset: function() {
    return { type: types.RESET_MAP_DTEAIL };
  },

  //CRUD METHODS

  // Create map_dteail
  createMap_dteail: function(map_dteail) {
    return function(dispatch) {
      return Map_dteailApi
        .createMap_dteail(map_dteail)
        .then(map_dteail => {
          dispatch(actionsFunction.createMap_dteailSuccess(map_dteail));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createMap_dteailSuccess: function(map_dteail) {
    return { type: types.CREATE_MAP_DTEAIL_SUCCESS, payload: map_dteail };
  },


  // Delete map_dteail
  deleteMap_dteail: function(id) {
    return function(dispatch) {
      return Map_dteailApi
        .deleteMap_dteail(id)
        .then(map_dteail => {
          dispatch(actionsFunction.deleteMap_dteailSuccess(map_dteail));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteMap_dteailSuccess: function(map_dteail) {
    return { type: types.DELETE_MAP_DTEAIL_SUCCESS, payload: map_dteail };
  },


  // Get map_dteail
  loadMap_dteail: function(id) {
    return function(dispatch) {
      return Map_dteailApi
        .getOneMap_dteail(id)
        .then(map_dteail => {
          dispatch(actionsFunction.loadMap_dteailSuccess(map_dteail));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMap_dteailSuccess: function(map_dteail) {
    return { type: types.GET_MAP_DTEAIL_SUCCESS, payload: map_dteail };
  },

  // Load  list
  loadMap_dteailList: function() {
    return function(dispatch) {
      return Map_dteailApi
        .getMap_dteailList()
        .then(list => {
          dispatch(actionsFunction.loadMap_dteailListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadMap_dteailListSuccess: function(list) {
    return { type: types.LIST_MAP_DTEAIL_SUCCESS, payload: list };
  },

	
  // Save map_dteail
  saveMap_dteail: function(map_dteail) {
    return function(dispatch) {
      return Map_dteailApi
        .saveMap_dteail(map_dteail)
        .then(map_dteail => {
          dispatch(actionsFunction.saveMap_dteailSuccess(map_dteail));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveMap_dteailSuccess: function(map_dteail) {
    return { type: types.UPDATE_MAP_DTEAIL_SUCCESS, payload: map_dteail };
  },


};

export default actionsFunction;
