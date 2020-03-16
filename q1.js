'use strict'


var array = [18,3,8,10,90];
var no =4 ;
var counter= 0;

function greaterThan(arrayParameter,numberParameter){

for(var i = 0; i < array.length; i++){

if(numberParameter < arrayParameter[i])

counter++
}
return console.log(counter); ;

}


greaterThan(array, no);