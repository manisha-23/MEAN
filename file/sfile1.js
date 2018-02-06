var fs = require("fs");

// Synchronous read

var data1 = fs.readFileSync('input1.txt');
var l1=data1.length;

console.log("input1.txt:"+l1);

var data2 = fs.readFileSync('input2.txt');
var l2=data2.length;

console.log("input2.txt:"+l2);

var data3 = fs.readFileSync('input3.txt');
var l3=data3.length;

console.log("input3.txt:"+l3);






