"use strict";
//  16. More Guest: you just found a bigger dinner  table .so now more space is 
//  available. think of three more guests to invite to dinner.
//  * Star with your program from exercise 15. Add a print ststment to the end of your bigger dinner table .
//  *Add one new guest to the beginning of your array .
//  *Add one new guest to the middle of your array .
//  *Use append() to add one new guest to the end of your list .
//  **Print a new set of invitation message, one for each person is your list .
let guestArr = ["Mehwish", "Mansoor", "fatima", "Umm-e-Hani"];
let canNotAttend = "Mehwish";
let newGuest = "Zahida";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
// guestArr.map((item) =>
// console.log(`Dear ${item}, i found a bigger dinner table.`));
// guestArr.map((item) =>
// console.log(`Dear ${item}, I found a bigger dinner table.`));
let guestBegin = "Fatima";
guestArr.unshift(guestBegin);
// console.log(guestArr);
let middleGuest = "Faiz";
let middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
// console.log(guestArr)
guestArr.push("Mansoor");
// console.log(guestArr)
guestArr.map((item) => console.log(`Dear ${item}, you are cordinally Invited to a dinner.`));
