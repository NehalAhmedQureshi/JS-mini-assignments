let getDateAndTime = new Date() ;

let myTime1 = dateFns.format(getDateAndTime, "MM/dd/yyy HH:mm:ss");

let myTime2 = dateFns.format(getDateAndTime, "E dd/M/yyy HH.mm");

let myTime3 = dateFns.format(getDateAndTime, "yyy-MM-dd H:mm EEEE");

let myTime4 = dateFns.format(getDateAndTime, "MMMM do, yyy hh.mm.ss a");

let myTime5 = dateFns.format(getDateAndTime , "dd MMMM yyy 'at' hh:mm a");

console.log(myTime1);
console.log(myTime2);
console.log(myTime3);
console.log(myTime4);
console.log(myTime5);