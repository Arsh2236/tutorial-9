"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Jasrajjot Kaur
   Date: 2024-10-08

*/


/* Store the current date & time */
var currentDay = new Date("October, 10, 2024 14:35:05");
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

/* Display date & time */
document.getElementById("dateNow").innerHTML = 
dateStr + "<br />" + timeStr;

/* Display days left before January 1st, 2018 */
var newYear = new Date("January 1, 2024");
var nextYear = currentDay.getFullYear() + 1;
newYear.setFullYear(nextYear);

/* Calculate the days left until New Years  */
var daysLeft = (newYear - currentDay) / (1000 * 60 * 60 * 24);

/* Calculate the hours left in the day */
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

/* Calculate the minss left in the day */
var minsLeft = (daysLeft - Math.floor(hoursLeft)) * 60;

/* Calculate the secs left in the day */
var secsLeft = (daysLeft - Math.floor(minsLeft)) * 60;

document.getElementById("dateNow").innerHTML = "m/d/y <br /> h:m:s";

/* Display the time left until New Years Eve */
document.getElementById("days").textContent = Math.floor(daysLeft);
document.getElementById("hrs").textContent = Math.floor(hrsLeft);
document.getElementById("mins").textContent = Math.floor(minsLeft);
document.getElementById("secs").textContent = "secs";