import React, {useEffect} from "react";
import "../css/Card.css";
import {useSelector, useDispatch} from "react-redux";
import {
 fetchId,
 fetchInfo,
 fetch5days,
 addToFavlist,
 addToloadFavList,
 changeToSearch,
 clickedoNFav,
 removeFavFromList
} from "../store";
let clicked = false;
const FavCard = prop => {
 const dispatch = useDispatch();
 const locationid = useSelector(state => state.locid);
 const location5days = useSelector(state => state.loc5days);

 const cardData = prop.info[0];
 const locname = getName(cardData.Link);
 const pic = createPic(cardData.WeatherIcon);
 const weatherText2 = createPic(cardData.WeatherText);
 let temp = cardData.ApparentTemperature.Metric.Value;
 const locid = getId(cardData.Link);
 function createPic(iconNum) {
  if (iconNum.toString.length === 1) {
  }
  const imgurl = "https://developer.accuweather.com/sites/default/files/";
  let num = iconNum;
  if (iconNum < 10) {
   num = "0" + num;
  }
  const endUrlImg = "-s.png";
  const finalurl = imgurl + num + endUrlImg;
  return finalurl;
 }
 function getName(link) {
  const split = link.split("/");
  return split[5];
 }
 function getId(link) {
  const split = link.split("/");
  return split[6];
 }

 return (
  <>
   <div className="Card shadow fav-card-effect">
    <div className="Card-title">{locname}</div>
    <div className="Temp">{temp}.C</div>
    <div className="weath-info"></div>
    <div
     onClick={() => {
      dispatch(clickedoNFav(locname + "|" + locid));
      dispatch(changeToSearch());
     }}
     className="Icon"
    >
     <img src={pic} alt="" />
    </div>
    <div
     onClick={() => {
      dispatch(removeFavFromList(locid));
     }}
     name={locid}
     className="remove-Favorite"
    >
     Remove
    </div>
   </div>
  </>
 );
};
export default FavCard;
