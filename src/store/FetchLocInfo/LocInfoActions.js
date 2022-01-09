import axios from "axios";
import {APIKEY} from '../../config/apiKey'

import {
 FETCH_LOCINFO_REQUEST,
 FETCH_LOCINFO_FAILURE,
 FETCH_LOCINFO_SUCCESS,
 RESET_INFO
} from "./LocInfoType";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const fetchInfo = (locationId) => {
 return dispatch => {
  dispatch(fetchInfoRequest());
  axios
   .get(`http://dataservice.accuweather.com/currentconditions/v1/${locationId}?apikey=${APIKEY}&details=true`)
   .then(response => {
    // response.data is the info of loc
    const locinfo = response.data;
    dispatch(fetchInfoSucsses(locinfo));
   })
   .catch(error => {
    // error.message is the error message
    dispatch(fetchInfoFail(error.message));
    toast.error("fail to get location information",{autoClose:4000});

   });
 };
};

export const fetchInfoRequest = () => {
 return {
  type: FETCH_LOCINFO_REQUEST
 };
};

export const fetchInfoSucsses = locinfo => {
 return {
  type: FETCH_LOCINFO_SUCCESS,
  payload: locinfo
 };
};

export const fetchInfoFail = error => {
 return {
  type: FETCH_LOCINFO_FAILURE,
  payload: error
 };
};
export const resetInfo = locinfo => {
 return {
  type: RESET_INFO,
  payload: ''
 };
};
