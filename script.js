const setTimer = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const resetKey = document.querySelector("#reset");


var timer = [0,0,0,0]
var interval;
var timerCondition = false;


function zero(time){

    if (time<=9) {

        time = "0"+time;
    }

    return time;
}



function timeCounter(){
    let correntTime = zero(timer[0])+":"+zero(timer[1])+":"+zero(timer[2]);
    setTimer.innerHTML = correntTime;

    timer[3]++;

    timer[0] = Math.floor( (timer[3]/100) /60);
    timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
    timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}




function compareText(){

    let enteredText = testArea.value;
    let textMatch = originText.substring(0,enteredText.length);

    if(enteredText==originText)
    {
    
        testWrapper.style.borderColor="green";
        clearInterval(interval);
    
    }
    else{
        if(enteredText==textMatch){
    
            testWrapper.style.borderColor="yellow";
      
        }
        else
        {
            
            testWrapper.style.borderColor="red";
        }
    }
}


function start(){

    let enteredLength = testArea.value.length;

    if( enteredLength == 0 && !timerCondition ){

        timerCondition = true;
        interval = setInterval(timeCounter,10);
    }
}


function reset(){

    testWrapper.style.borderColor="grey";
    clearInterval(interval);
    timerCondition = false;
    interval = null;
    timer = [0,0,0,0];
    testArea.value = "";
    setTimer.innerHTML = "00:00:00";

}


testArea.addEventListener("keypress",start);
testArea.addEventListener("keyup",compareText);
resetKey.addEventListener("click",reset)

