/*
    Author : Carlos Raniel Ariate Arro 

    Last Update Date & Time : Thursday,July 30 2021  10:45pm

    timer functions: tempalate() start()
    task list functions : AddTask()
*/

// preset values for the timer function template 
var min = 25;
var sec = "00";

// when the page is first loaded this function will be called to immediately 
// put the timer on 25:00
function template(){
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}
function start(){
    min = 24;
    sec = 59;
    document.getElementById("minutes").innerHTML= min;
    document.getElementById("seconds").innerHTML = sec;
    
    var minutes_interval = setInterval(minutesTimer,60000);
    var seconds_interval = setInterval(secondsTimer,1000);

    function minutesTimer(){
        min-min-1;
        document.getElementById("minutes").innerHTML = min;
    }
    function secondsTimer(){
        sec = sec - 1;
        document.getElementById("seconds").innerHTML = sec;
        if(sec <= 0){
            if(min <= 0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
            }
            sec = 60;
        }
    }
}

// function will be invoked after submit button located in the Task list form clicked
function AddTask(){
    console.log(input);
    var li = document.createElement('li');
    li.className = 'li';
    var box = document.createElement('box');
    var input = document.querySelector('#TaskInput').value;
    var text = document.createTextNode(input);
    var remove = document.createElement('remove');
    remove.className="remove";
    remove.setAttribute('onclick','removeItem()');
    var remove_txt = document.createTextNode('REMOVE');
    li.appendChild(box);
    li.appendChild(remove);
    box.appendChild(text);
    remove.appendChild(remove_txt);
    // checking whether or not the user has entered a task or not
    if(input ===""){
        alert("You must write something to add!");
    }else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("TaskInput").value=""; 
}



