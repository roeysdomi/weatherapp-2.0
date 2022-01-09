import React ,{useState,useEffect,useRef}from "react";
import "../css/main.css";
import SearchPage from "./SearchPage";
import FavPage from "./FavPage";
import {readListFromLocalStorage} from "../util/HandleArrays"
import { useSelector, useDispatch } from 'react-redux'
import { changeToSearch,changeToFav,resetInfo,setFavListfromLocal} from '../store'
import { gsap } from "gsap";

const Main = () => {
   const general=useSelector(state => state.general)
   const dispatch = useDispatch()
   const refMenuForTheme=useRef('')
   const refPagesForTheme=useRef('')
   const changeThemeToLight=()=>{
      refMenuForTheme.current.style.background="#1a237e";
      refPagesForTheme.current.style.background="#eeeeee";

   }
   const changeThemeToDark=()=>{
     refMenuForTheme.current.style.background="black";
     refPagesForTheme.current.style.background="#616161";
   }
  useEffect(()=>{
    let savedFavList=localStorage.getItem('savedFavList')
    savedFavList=readListFromLocalStorage(savedFavList)
    dispatch(setFavListfromLocal(savedFavList))
  },[])
 return (
  <>
   <div className="Main">
    <div ref={refMenuForTheme} className="LeftMenu">
     <div className="Menu-title">
      WEATHER APP BY <span>HEROLO</span>
     </div>
     <div onClick={()=>{dispatch(changeToSearch())}} className="Menu-Search PageOption">Search</div>
     <div  onClick={()=>{
       dispatch(resetInfo())
       dispatch(changeToFav())
     }} className="Menu-Favorite PageOption">Favorite</div>
     <div className="con-theme">
      <div className="h1">Change theme:</div>
      <div className="con-buttons">
       <div onClick={()=>{changeThemeToLight()}} className="day ThemeButt"></div>
       <div onClick={()=>{changeThemeToDark()}} className="night ThemeButt"></div>
      </div>
       <div className="email-roey">roeysdomi@gmail.com</div>
     </div>
    </div>
    <div ref={refPagesForTheme} className="con-Pages">
    {(general.page==='search')?<SearchPage/>:<FavPage />}
    </div>
   </div>
  </>
 );
};
export default Main;
