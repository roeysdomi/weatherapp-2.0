import React, {useEffect} from "react";
import FavCard from "../components/FavCard";
import {createListforLocalStorage} from "../util/HandleArrays"
import "../css/FavPage.css";
import {
 fetchId,
 fetchInfo,
 addToFavlist,
 addToloadFavList,
 changeToSearch,
 resetUpdatedList
} from "../store";
import {useSelector, useDispatch} from "react-redux";
let clicked = false;
const FavPage = () => {
 const general = useSelector(state => state.general);
 const locationinfo = useSelector(state => state.locinfo);
 const dispatch = useDispatch();
 const theUpdatedFavList = general.favlistloaded;

 function loadUpdateFavList() {
  const favlist = general.favlist;
  for (let key in favlist) {
    clicked=true;
   const favItem = favlist[key];
   const splitItem = favItem.split("-");
   const cityName = splitItem[0];
   const cityId = splitItem[1];
   dispatch(fetchInfo(cityId));
  }
 }

 function createListOfValues(list) {
  let templist = [];
  for (let key in list) {
   let location = list[key];
   templist.push(location);
  }
  return templist;
 }
 useEffect(() => {
  if(locationinfo.LocInfo){
   const itemNewInfo = locationinfo.LocInfo;
   dispatch(addToloadFavList(itemNewInfo));
 }
 }, [locationinfo.LocInfo]);
 useEffect(() => {
   dispatch(resetUpdatedList())
   loadUpdateFavList()
   const favlist = general.favlist;
   const readyTosave=createListforLocalStorage(favlist)
   localStorage.setItem("savedFavList",readyTosave)
}, [general.favlist]);
 return (
  <>
   <div className="con-Result-Search ">
    <div className="Result-title">
     <div className="Favorite-title">FAVORITES:</div>
     <div
      onClick={() => {
       clicked = true;
       loadUpdateFavList();
      }}
      className="load-Fav-button FavButton"
     >
      Load Favorite locations
     </div>
    </div>
    <div className="con-cards fav-result">
     <div className="nextWeek nextweek-favpage">
      {(() => {
       let CardList = createListOfValues(theUpdatedFavList);
       return CardList.map(location => {
        return <FavCard key={location[0].Link} info={location} />;
       });
      })()}
     </div>
    </div>
   </div>{" "}
  </>
 );
};

export default FavPage;
