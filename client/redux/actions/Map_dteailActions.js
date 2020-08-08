import actionsFunction from "./generated/Map_dteailActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import map_dteailApi from "../../api/map_dteailApi";
 
 actionsFunction.loadmap_dteailList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return map_dteailApi
     .getmap_dteailList()
     .then(list => {
       dispatch(actionsFunction.loadmap_dteailSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
