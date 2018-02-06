var fs = require("fs");
// Asynchronous read

fs.readFile('input1.txt', function (err, data1) { //func passes as a parameter r known as callback function.
var l1=data1.length;

console.log("input1.txt:"+l1);
});


fs.readFile('input2.txt', function (err, data2) {
var l2=data2.length;

console.log("input2.txt:"+l2);
});


fs.readFile('input3.txt', function (err, data3) {
var l3=data3.length;

console.log("input3.txt:"+l3);
});
