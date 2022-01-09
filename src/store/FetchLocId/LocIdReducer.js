import {
 FETCH_LOCID_REQUEST,
 FETCH_LOCID_FAILURE,
 FETCH_LOCID_SUCCESS,
 SET_ID
} from "./LocIdType";

const initialState = {
  loading: false,
  LocId:'',
  name:'',
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID:
      return {
        ...state,
        LocId: action.payload
      }
    case FETCH_LOCID_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_LOCID_SUCCESS:
      return {
        loading: false,
        LocId: action.payload.Key,
        name:action.payload.LocalizedName,
        error: ''
      }
    case FETCH_LOCID_FAILURE:
      return {
        loading: false,
        LocId: [],
        name:'',
        error: action.payload
      }
    default: return state
  }
}

export default reducer
