/*
    Author : Carlos Raniel Ariate Arro 

    Last Update Date & Time : Tuesday,August 10 2021  5:55pm

*/
/* variables containing the audio files from the sounds folder*/
var check_sound = new Audio("sounds/check.mp3");
var SlowMorning_Sound = new Audio("sounds/SlowMorning.mp3");
var Daybreak_Sound = new Audio("sounds/DayBreak.mp3");
var EarlyRiser_Sound = new Audio("sounds/EarlyRiser.mp3");

// variable that will contain the sound the user chooses
var sound = null;

// preset values for the timer function template
var min = 25;
var sec = "00";
var hrs ="00";

//executed when the website is loaded the body will call the template() function via onload event
function template(){
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}

//functions for playing and setting the sounds 
function showOptions2(){
    var timer_options = document.getElementById("timer-options");
    var sound_options = document.getElementById("sound-options");
    if (sound_options.style.display === "none") {
        sound_options.style.display = "block";
      } else {
        sound_options.style.display = "none";
      }
      if(timer_options.style.display === "block" && sound_options.style.display =="none"){
        timer_options.style.display = "none";
        sound_options.style.display = "block";
    }
}
function checkSound(){
    sound = check_sound;
    console.log(sound);
    sound.play();
}
function DaybreakSound(){
    sound = Daybreak_Sound;
    console.log(sound);
    sound.play();
}
function SlowMorningSound(){
    sound = SlowMorning_Sound;
    console.log(sound);
    sound.play();
}
function EarlyRiserSound(){
    sound = EarlyRiser_Sound;
    console.log(sound);
    sound.play();
}
//executed when the timer button (center) is clicked on
function showOptions(){
    var timer_options = document.getElementById("timer-options");
    var sound_options = document.getElementById("sound-options");
    if (timer_options.style.display === "none") {
        timer_options.style.display = "block";
      } else {
        timer_options.style.display = "none";
      }
    if(sound_options.style.display === "block" && timer_options.style.display =="none"){
        sound_options.style.display = "none";
        timer_options.style.display = "block";
    }
}
//executed when the start button is clicked on 
//this 
var minutes_interval = 0;
var seconds_interval = 0;
function start(){
    min = min-1;
    sec = 59;
    document.getElementById("minutes").innerHTML= min;
    document.getElementById("seconds").innerHTML = sec;
    
    minutes_interval = setInterval(minutesTimer,60000);
    seconds_interval = setInterval(secondsTimer,1000);

    function minutesTimer(){
        min-min-1;
        document.getElementById("minutes").innerHTML = min;
    }
    function secondsTimer(){
        sec = sec - 1;
        document.getElementById("seconds").innerHTML = sec;
        if(sec <= 57){
            if(min <= 24){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
                console.log(sound);
                sound.play();
            }
            sec = 60;
        }
    }
}

// executed when the clear button is clicked on, this clears and resets the timer. 
function clearTimer(){
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    min = 25;
    sec = "00";
    hrs = "00";
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("hours").innerHTML = hrs;
}

//functions for increasing the time of the pomodoro
function increase1(){
    min += 1;
    document.getElementById("minutes").innerHTML = min;    
}
function increase5(){
    min += 5;
    document.getElementById("minutes").innerHTML = min;    
}
function increase10(){
    min += 10;
    document.getElementById("minutes").innerHTML = min;    
}
function increase15(){
    min += 15;
    document.getElementById("minutes").innerHTML = min;    
}
function increase30(){
    min += 30;
    document.getElementById("minutes").innerHTML = min;    
}
function increase60(){
    min += 60;
    document.getElementById("minutes").innerHTML = min;    
}

function showOptions3(){
    var settings = document.getElementById("settings-options");
    if(settings.style.display === 'none'){
        settings.style.display = 'block';
    }else{
        settings.style.display = 'none';
    }
}

function showBg(){
    var settingsParent = document.getElementById('settings-options');
    var settingsChild = document.getElementById("settings-bg");
    if(settingsChild.style.display === "none"){
        settingsParent.style.display = "none";
        settingsChild.style.display = "block";
    }else{
        settingsChild.style.display = "none";
        settingsParent.style.display = "block";
    }
}
function setBg1(){
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url("background.jpg")';
}   
function setBg2(){
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url("background2.jpg")';
}

function returnSettings(){
    document.getElementById('settings-options').style.display = "block";
    document.getElementById("settings-bg").style.display = "none";
}


/*Information section functions*/
function showInfo(){
    var info_Sec = document.getElementById("info-section");
    if(info_Sec.style.display ==="none"){
        info_Sec.style.display = "block";
    }else{
        info_Sec.style.display = "none";
    }
}

function showInfoSec1(){
    var sec1 = document.getElementById("InfoSec1");
    if(sec1.style.display === "none"){
        sec1.style.display = "block";
    }else{
        sec1.style.display ="none";
    }
}
function showInfoSec2(){
    var sec2 = document.getElementById("InfoSec2");
    if(sec2.style.display === "none"){
        sec2.style.display = "block";
    }else{
        sec2.style.display ="none";
    }
}
function showInfoSec3(){
    var sec3 = document.getElementById("InfoSec3");
    if(sec3.style.display === "none"){
        sec3.style.display = "block";
    }else{
        sec3.style.display ="none";
    }
}
function showInfoSec4(){
    var sec4 = document.getElementById("InfoSec4");
    if(sec4.style.display === "none"){
        sec4.style.display = "block";
    }else{
        sec4.style.display ="none";
    }
}


//jQuery functions to toggle and untoggle the task menu 
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });

$("#menu-untoggle").click(function(e){
    e.preventDefault();
    $("#wrapper").not(this).removeClass("toggled");
});


//functions for toggling and untoggling the form inthe task menu 
  function toggleForm(){
      var form = document.getElementById("form");
      var btn = document.getElementById("Task_Btn");
      if (form.style.display === "none") {
        form.style.display = "block";
        btn.style.transform = "rotate(45deg)";
      } else {
        form.style.display = "none";
        btn.style.transform = "rotate(-90deg)";
      }
  }


  var check_no = 0;
  var no_Tasks = 0;
  var finish_no_Tasks = 0;
  // function will be invoked after submit button located in the Task list form clicked
  function AddTask(){
      var task = document.createElement('div');
      task.className="task";
      var li = document.createElement('li');
      li.className = 'li';
      var box = document.createElement('label');
      box.className = "box";
      var input = document.querySelector('#TaskInput').value;
      var text = document.createElement("label");
      text.className = "text-label";
      text.innerHTML = input;
      //generating check element
      /* Need to figure out how to dynamically create checkboxes properly */
      var checkbox = document.createElement("input");
      checkbox.type="checkbox";
      checkbox.className="check";
      check_no += 1
      checkbox.id="check " +check_no;
      var checkmark = document.createElement('label');
      checkmark.htmlFor = checkbox.id;
      checkmark.className = "checkmark";
      checkbox.onchange = function(){
            if(checkbox.checked){
                finish_no_Tasks +=1
                document.getElementById("Task_num1").innerHTML = finish_no_Tasks;
            }else{
                finish_no_Tasks -=1
                document.getElementById("Task_num1").innerHTML = finish_no_Tasks;
            }
        }   
      //delete button
      var btnRMV = document.createElement("span");
      btnRMV.setAttribute("class","far fa-trash-alt");
      //calling the removeTask() function when the button is clicked 
      var remove = document.createElement("button");
      remove.onclick= function(){
          this.parentNode.parentNode.remove();
          no_Tasks -= 1;
          document.getElementById("Task_num2").innerHTML = no_Tasks;
      }
      //adding the elements
      li.appendChild(task);
      task.appendChild(box);
      task.appendChild(remove);
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
      no_Tasks += 1;
      document.getElementById("Task_num2").innerHTML = no_Tasks;
  }

// functions to hide and show the arrow for toggling and untoggling the task menu
function hideArrow(){
    var btn = document.getElementById("menu-toggle");
    btn.style.setProperty("display","none","important");
}

function showArrow(){
    var btn = document.getElementById("menu-toggle");
    btn.style.setProperty("display","block","important");
}

