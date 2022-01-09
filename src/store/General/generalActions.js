import axios from "axios";
import {
 CHANGE_PAGE_TO_FAV,
 CHANGE_PAGE_TO_SEARCH,
 ADD_TO_FAVLIST,
 LOADING_FAV_LIST,
 FAV_CLICKED,
 SET_FAV_LIST,
 REMOVE_FAV,
 RESET_UPDATED_FAV_LIST
} from "./generalType";

export const changeToFav = () => {
 return {
  type: CHANGE_PAGE_TO_FAV,
  payload: "fav"
 };
};
export const clickedoNFav = (location) => {
 return {
  type: FAV_CLICKED,
  payload: location
 };
};

export const changeToSearch = () => {
 return {
  type: CHANGE_PAGE_TO_SEARCH,
  payload: "search"
 };
};
export const addToFavlist = location => {
 return {
  type: ADD_TO_FAVLIST,
  payload: location
 };
};
export const addToloadFavList = list => {
 return {
  type: LOADING_FAV_LIST,
  payload: list
 };
};
export const setFavListfromLocal = list => {
 return {
  type: SET_FAV_LIST,
  payload: list
 };
};
 export const removeFavFromList = locationId => {
  return {
   type: REMOVE_FAV,
   payload: locationId
  };
};
export const resetUpdatedList = () => {
 return {
  type: RESET_UPDATED_FAV_LIST,
 };
};
