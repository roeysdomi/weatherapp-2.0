import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchId, fetchInfo, fetch5days} from "../store";

const SearchBar = Prop => {
 const [city, setCity] = useState("");
 const locationid = useSelector(state => state.locid);
 const locationinfo = useSelector(state => state.locinfo);
 const dispatch = useDispatch();

 const getSearchInfo = locationName => {
  dispatch(fetchId(locationName));
 };
 useEffect(() => {
  if (!locationinfo.LocInfo) dispatch(fetchId("tel aviv"));
 }, []);
 useEffect(() => {
  if (locationid.LocId !== "" || locationid.LocId !== []) {
   if (locationid.LocId) {
    dispatch(fetchInfo(locationid.LocId));
    dispatch(fetch5days(locationid.LocId));
   }
  }
 }, [locationid.LocId]);

 return (
  <>
   <div className="SearchBar shadow">
    <form
     onSubmit={e => {
      e.preventDefault();
      getSearchInfo(city);
     }}
    >
     <input type="text" onChange={e => setCity(e.target.value)} />
    </form>
   </div>
  </>
 );
};
export default SearchBar;
