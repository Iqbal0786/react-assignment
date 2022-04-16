import { ADD_CITY } from "./AddCityAction";

 export const addCityReducer=(store={data:[]} ,{type,payload})=>{
         switch(type){
             case ADD_CITY: return {...store , data:payload}
             default:return store
         }
}