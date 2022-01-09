export function createListforLocalStorage(list) {
 let stringList = "";
 for (let key in list) {
  let value = list[key];
  stringList = stringList + value + ",";
 }
 return stringList;
}

export function readListFromLocalStorage(stringlist) {
  if(!stringlist) {return []}
 const arrayObjectList = [];
 const splitString = stringlist.split(",");
 splitString.forEach(item => {
  if (item !== "") {
   arrayObjectList[item] = item;
  }
 });
 return arrayObjectList;
}
