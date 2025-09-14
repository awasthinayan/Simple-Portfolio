"use strict";

var student = "Nayan Awasthi"

function fun(){
   var teacher = "Sanket Sir"
    content ="farzi"             //In strict mode it does not make content global
    console.log("Hello" ,teacher);
}

function live(){
    var online = "PW Skills"
    console.log("Welcome to", online ," and PW student is:" ,student);
    }

// console.log(student , content);


fun();
live();

console.log(student , content);