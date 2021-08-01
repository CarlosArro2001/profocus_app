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
    var box = document.createElement('label');
    box.className = "box";
    var input = document.querySelector('#TaskInput').value;
    var text = document.createElement("label");
    text.innerHTML = input;
    //generating check element
    var checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.className="check";
    checkbox.id="check";
    var checkmark = document.createElement('label');
    checkmark.htmlFor = checkbox.id;
    checkmark.className = "checkmark";
    //chkbutton.onclick = tickFunc();
    //delete button
    var btnRMV = document.createElement("span");
    btnRMV.setAttribute("class","far fa-trash-alt fa-2x");
    //calling the removeTask() function when the button is clicked 
    var remove = document.createElement("button");
    //adding the elements 
    li.appendChild(box);
    li.appendChild(remove);
    box.appendChild(checkbox);
    box.appendChild(checkmark);
    box.appendChild(text);
    remove.appendChild(btnRMV);
    // checking whether or not the user has entered a task or not
    if(input ===""){
        alert("You must write something to add!");
    }else{
        document.getElementById("list").appendChild(li);
    }
    document.getElementById("TaskInput").value=""; 

    function check(){
        console.log("Registered");
    }
    
}



