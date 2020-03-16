'use strict'

var sectionDate = document.getElementById('date');
sectionDate.textContent = new Date().toDateString() ;

var getThningsDone= document.getElementById('getThingsDone');
var finishingDate = document.getElementById('finishingDate');



var resultSection = document.getElementById('results');


var ToDoArrayOfObject = []

function ToDoConstructor(toDo,date){
 this.toDo= toDo ;
 this.date = date;
 ToDoArrayOfObject.push(this);

}


///render  after submit

var myForm = document.getElementById('form')
myForm.addEventListener('submit',render)

function render(event){
    event.preventDefault();
    console.log('he');
    var theGodDamnList = event.target.getThingsDone.value
    var dateOfFinish = event.target.finishingDate.value

    // console.log(typeof(theGodDamnList),typeof(dateOfFinish),'dskdjaskldjsakld');
        
    var newTodo = new ToDoConstructor(theGodDamnList,dateOfFinish);
    console.log(ToDoArrayOfObject);
    storeToDoList()
   

    var ol1 = document.createElement('ol');
    resultSection.appendChild(ol1);
    var li1 = document.createElement('li');
    ol1.appendChild(li1)
    li1.textContent= `${newTodo.toDo} \n ${newTodo.date}`
    myForm.reset();
    
}


// Stroing data and getting them

function storeToDoList(){

  var localToDo =  JSON.stringify(ToDoArrayOfObject)
  
  localStorage.setItem('ToDolistKey',localToDo);
}

function getToDoList(){
   var localToDo = localStorage.getItem('ToDolistKey')

    if(localToDo){

        ToDoArrayOfObject =  JSON.parse(localToDo)
    }
    return render();
    
    
}
 getToDoList()
