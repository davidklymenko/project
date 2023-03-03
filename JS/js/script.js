"use strict"

if (2 == 2) {
    console.log("Ok!");
} else {
    console.log("Error!");
}

const few = 1000; 

if (few < 500) {
    console.log('No');
} else if (few > 25000) {
    console.log('Too many');
} else if (few < -9 ) {
    console.log('Too not many');
} else {
    console.log('Yep');
}

(few == 1000) ? console.log('Yep') : console.log('No');

const haveFun = 50;

switch (haveFun) {
    case 40:
        console.log('No');
        break;
    case 49:
    console.log('No');
        break;
    case 51:
    console.log('Yes');
        break;
    default: 
    console.log('Not this time')
}