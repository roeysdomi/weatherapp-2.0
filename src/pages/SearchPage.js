import React, {useEffect,useRef} from "react";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import {createListforLocalStorage} from "../util/HandleArrays"
import {fetchId, fetchInfo, addToFavlist,clickedoNFav,fetch5days,setId} from "../store";
import {useSelector, useDispatch} from "react-redux";
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/SearchPage.css";
import { gsap } from "gsap";

const SearchPage = () => {
 toast.configure();
 const dispatch = useDispatch();
 const general = useSelector(state => state.general);
 const locationinfo = useSelector(state => state.locinfo);
 const locationid = useSelector(state => state.locid);
 let loc5days = useSelector(state => state.loc5days.loc5days);
 checkIfFavClicked()
 let weathertxt = locationinfo.LocInfo
  ? locationinfo.LocInfo[0].WeatherText
  : "";
 let temp = locationinfo.LocInfo
  ? locationinfo.LocInfo[0].Temperature.Metric.Value
  : "";
 let city = locationid.name;
 function checkIfFavClicked()
 {
     if(general.clicked)
     {
       const splitItem=general.clicked.split("|")
       const locationName=splitItem[0].split("-")
       const locationId=splitItem[1]
       dispatch(setId(locationId))
       dispatch(fetchId(locationName[0]))
       dispatch(fetchInfo(locationId))
       dispatch(fetch5days(locationId))
       dispatch(clickedoNFav(""));
     }
 }
 // ANIMATION
 const boxRef = useRef('');
 const refTitle = useRef('');

 useEffect(()=>{
   gsap.from( boxRef.current , 1.3, {
     y:20,
     opacity:0,
     ease: "power4.out",
     delay: 2,
     skewY: 0,
     stagger: {
       amount: 2.3
     }
   })
   gsap.from( refTitle.current , 1.3, {
     y:-20,
     opacity:0,
     ease: "power4.out",
     delay: 1,
     skewY: 0,
     stagger: {
       amount: 2.3
     }
   })

 },[])

  const shit=(loc5days)=>{
    const g=[]
    if(!loc5days){return <></>}
    loc5days.map(day => {g.push(<Card  key={day.Date} info={day} />)})
    return  g
  }

 return (
  <>
   <SearchBar />
   <div className="con-Result-Search">
    <div className="Result-title">
     <div ref={boxRef} className="CityAndTemp">
      The Current temperator in {city}: {temp}.C
     </div>
     <div className="Weather-desc">{weathertxt}</div>
     <div
      onClick={() => {
       toast.success("Added to Favorite list", {autoClose: 2000});
       dispatch(addToFavlist(city + "-" + locationid.LocId));
       const favlist = general.favlist;
       const readyTosave=createListforLocalStorage(favlist)
       localStorage.setItem("savedFavList",readyTosave)
      }}
      className="FavButton"
     >
      Add to Favoritem +
     </div>
    </div>
    <div className="con-cards">
     <div ref={refTitle} className="nextWeek-Title"> WEATHER BROADCAST:</div>
     <div className="nextWeek">
       { shit(loc5days)}
     </div>
    </div>
   </div>
  </>
 );
};
export default SearchPage;
