import React, {useRef, useEffect} from "react";
import "../css/Card.css";
import {useSelector, useDispatch} from "react-redux";
import {gsap} from "gsap";

const Card = prop => {
 const locationid = useSelector(state => state.locid);
 const day = prop.info;
 const pic = createPic(day.Day.Icon);
 const weekDay = convertDateToDay(day.Date);
 let temp = convertFahrenheitToCelcius(day.Temperature.Maximum.Value);
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
 function convertFahrenheitToCelcius(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = ((fTemp - 32) * 5) / 9;
  return parseInt(fToCel);
 }

 function convertDateToDay(date) {
  const tempdate = new Date(date);
  const day = tempdate.getDay();
  if (day == 0) {
   return "Sunday";
  }
  if (day == 1) {
   return "Monday";
  }
  if (day == 2) {
   return "Tuesday";
  }
  if (day == 3) {
   return "Wednesday";
  }
  if (day == 4) {
   return "Thursday";
  }
  if (day == 5) {
   return "Friday";
  }
  if (day == 6) {
   return "Saturday";
  }
 }
 // animation
 const refcard = useRef("");
 useEffect(() => {
  gsap.from(refcard.current, 1.3, {
   y: -20,
   opacity: 0,
   ease: "power4.out",
   delay: 0.8,
   skewY: 0,
   stagger: {
    amount: 2.3
   }
  });
 }, []);

 return (
  <>
   <div ref={refcard} className="Card shadow">
    <div className="Card-title">
     {locationid.name}
     <br></br>
     <span>{weekDay}</span>{" "}
    </div>
    <div className="Temp">{temp}.C</div>
    <div className="weath-info">{day.Day.IconPhrase}</div>
    <div className="Icon">
     <img src={pic} alt="" />
    </div>
   </div>
  </>
 );
};
export default Card;
