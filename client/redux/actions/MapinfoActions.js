import actionsFunction from "./generated/MapinfoActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import mapinfoApi from "../../api/mapinfoApi";
 
 actionsFunction.loadmapinfoList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return mapinfoApi
     .getmapinfoList()
     .then(list => {
       dispatch(actionsFunction.loadmapinfoSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
