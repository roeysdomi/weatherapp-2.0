import {
 FETCH_LOCINFO_REQUEST,
 FETCH_LOCINFO_FAILURE,
 FETCH_LOCINFO_SUCCESS,
 RESET_INFO
} from "./LocInfoType";

const initialState = {
  loading: false,
  LocInfo:'',
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_INFO:
      return {
        ...state,
        LocInfo:''
      }
    case FETCH_LOCINFO_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_LOCINFO_SUCCESS:
      return {
        loading: false,
        LocInfo: action.payload,
        error: ''
      }
    case FETCH_LOCINFO_FAILURE:
      return {
        loading: false,
        LocInfo: '',
        error: action.payload
      }
    default: return state
  }
}

export default reducer
