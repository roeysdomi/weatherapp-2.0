import {
 FETCH_LOC5DAYS_REQUEST,
 FETCH_LOC5DAYS_FAILURE,
 FETCH_LOC5DAYS_SUCCESS
} from "./5daysType";

const initialState = {
  loading: false,
  loc5days:[],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOC5DAYS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_LOC5DAYS_SUCCESS:
      return {
        loading: false,
        loc5days: action.payload,
        error: ''
      }
    case FETCH_LOC5DAYS_FAILURE:
      return {
        loading: false,
        loc5days: '',
        error: action.payload
      }
    default: return state
  }
}

export default reducer
