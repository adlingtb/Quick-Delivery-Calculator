const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let today = new Date();

let leadTime = 5;
let timeRange = leadTime + 4;
let firstDate = today.setDate(today.getDate() + leadTime);
let secondDate = today.setDate(today.getDate() + timeRange);
console.log(new Date(firstDate), new Date(secondDate))

let day1 = new Date(firstDate);
let day2 = new Date(secondDate);

let deliveryEstimate = "Estimated Delivery by <strong>"+ weekday[day1.getUTCDay()] +" "+ day1.getUTCDate() + " " + month[day1.getUTCMonth()] + "</strong> and <strong>"+ weekday[day2.getUTCDay()] +" "+ day2.getUTCDate() + " " + month[day2.getUTCMonth()] + "</strong>";

document.getElementById("element").innerHTML = deliveryEstimate

//Replace "element" with paragraph id

