import axios from "axios";
import {APIKEY} from '../../config/apiKey'
import {
 FETCH_LOC5DAYS_REQUEST,
 FETCH_LOC5DAYS_FAILURE,
 FETCH_LOC5DAYS_SUCCESS
} from "./5daysType";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const fetch5days = (cityId) => {
 return dispatch => {
  dispatch(fetch5daysRequest());
  axios
   .get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityId}?apikey=${APIKEY}`)
   .then(response => {
    // response.data is the info of loc
    const loc5days = response.data;
    dispatch(fetch5daysSucsses(loc5days));
   })
   .catch(error => {
    // error.message is the error message
    dispatch(fetch5daysFail(error.message));
    toast.error("fail to load 5 days",{autoClose:4000});

   });
 };
};

export const fetch5daysRequest = () => {
 return {
  type: FETCH_LOC5DAYS_REQUEST
 };
};

export const fetch5daysSucsses = loc5days => {
 return {
  type: FETCH_LOC5DAYS_SUCCESS,
  payload: loc5days.DailyForecasts
 };
};

export const fetch5daysFail = error => {
 return {
  type: FETCH_LOC5DAYS_FAILURE,
  payload: error
 };
};
