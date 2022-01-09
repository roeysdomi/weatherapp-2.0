import axios from "axios";
import{APIKEY} from '../../config/apiKey'

import {
 FETCH_LOCID_REQUEST,
 FETCH_LOCID_FAILURE,
 FETCH_LOCID_SUCCESS,
 SET_ID
} from "./LocIdType";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const fetchId = (cityName) => {
 return dispatch => {

  dispatch(fetchIdRequest());
  axios
   .get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${APIKEY}&q=${cityName}`)
   .then(response => {
    // response.data is the users
    const locid = response.data;
    dispatch(fetchIdSucsses(locid));
   })
   .catch(error => {
    // error.message is the error message
    dispatch(fetchIdFail(error.message));
    toast.error("fail to get location id",{autoClose:4000});

   });
 };
};

export const fetchIdRequest = () => {
 return {
  type: FETCH_LOCID_REQUEST
 };
};

export const fetchIdSucsses = locId => {
 return {
  type: FETCH_LOCID_SUCCESS,
  payload:locId[0]
 };
};
export const setId = locId => {
 return {
  type: SET_ID,
  payload:locId
 };
};

export const fetchIdFail = error => {
 return {
  type: FETCH_LOCID_FAILURE,
  payload: error
 };
};
