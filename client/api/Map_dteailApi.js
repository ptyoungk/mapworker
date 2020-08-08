import Map_dteailApiGenerated from "./generated/Map_dteailApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Map_dteailApi extends Map_dteailApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Map_dteail List
  static getMap_dteailList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/map_dteails")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Map_dteailApi;