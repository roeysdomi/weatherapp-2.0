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

const initialState = {
 page: "search",
 favlist: [],
 favlistloaded: [],
 clicked: ""
};

const reducer = (state = initialState, action) => {
 switch (action.type) {
   case RESET_UPDATED_FAV_LIST:
    return {
     ...state,
     favlistloaded:[]
    };
  case CHANGE_PAGE_TO_FAV:
   return {
    ...state,
    page: action.payload
   };
  case CHANGE_PAGE_TO_SEARCH:
   return {
    ...state,
    page: action.payload
   };
  case LOADING_FAV_LIST: {
   const templist = state.favlistloaded;
   templist[action.payload[0].Link.split("/")[5]] = action.payload;

   return {
    ...state,
    favlistloaded: templist
   };
  }
  case ADD_TO_FAVLIST: {
   const templist = state.favlist;
   templist[action.payload] = action.payload;
   return {
    ...state,
    favlist: templist
   };
  }
  case FAV_CLICKED:
   return {
    ...state,
    clicked: action.payload
   };
  case SET_FAV_LIST:
   return {
    ...state,
    favlist: action.payload
   };
  case REMOVE_FAV: {
   const templist = state.favlist;
   const newlist = [];
   for (let keys in templist) {
    if (!templist[keys].includes(action.payload)) {
     newlist[templist[keys]] = templist[keys];
    }
   }
   return {
    ...state,
    favlist: newlist
   };
  }
  default:
   return state;
 }
};

export default reducer;
