"use strict";
const printName = (name) => 'Hi ' + name;
console.log(printName("Sid"));
const printBill = (name, bill) => `Hi ${name}, please pay ${bill}`;
console.log(printBill("sid", 100));
const person = {
    roll: 32,
    username: 'Sidharth',
    age: 23
};
const { username, age } = person;
console.log(username);
console.log(age);
