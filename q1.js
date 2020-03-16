'use strict'


var array = [5,3,2,9];
var no = 1;
var counter= 0;

function greaterThan(arrayParameter,numberParameter){

for(var i = 0; i < array.length; i++){

if(numberParameter < arrayParameter[i])

counter++
}
return console.log(counter); ;

}


greaterThan(array, no);