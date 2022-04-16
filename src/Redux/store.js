import { createStore } from "redux";
import { addCityReducer } from "./AddCity/AddCityReducer";

 export const store= createStore(addCityReducer)