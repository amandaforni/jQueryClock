//STILL TO DO --> Try and make it load automatically correct time instead of jumping to it
// --> Automatically updating time


//This should be for the text displays
/* ---> Doesn't work yet
function updateTime(){
    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var t_str = hours + ":" + minutes + " ";
    document.getElementById('time_span').innerHTML = t_str;
}
setInterval(updateTime, 1000); */

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;  
d = n.getDate();
h = n.getHours();
min = n.getMinutes();
s = n.getSeconds();

if(m===1){
    m = "January"
} else if (m === 2){
    m = "February"
} else if (m === 3){
    m = "March"
} else if (m === 4){
    m = "April"
} else if (m === 5){
    m = "May"
} else if (m === 6){
    m = "June"
} else if (m === 7){
    m = "July"
} else if (m === 8){
    m = "August"
} else if (m === 9){
    m = "September"
} else if (m === 10){
    m = "October"
}else if (m === 11){
    m = "November"
}else if (m === 12){
    m = "December"
}

if (min < 10){
    min = "0" + min
}
console.log(`${d} of ${m}, ${y}`);

//Clock animation
var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  
  $('.hours').css('transform', `rotate(${hour}deg)`);
  $('.minutes').css('transform', `rotate(${minute}deg)`);
  $('.seconds').css('transform', `rotate(${second}deg)`);
}

setInterval(clock, inc);



/*
//initLocalClocks converts the time to a corresponding angle, and loops through each hand to set each

function initLocalClocks() {

    //Creates an object with each hand and the angle in degrees
    var hands = [
        {hand: 'hours',
        angle: (h * 30) + (min / 2)},
        {hand: 'minutes',
        angle: (min * 6)},
        {hand: 'seconds',
        angle: (s * 6)}
    ];

    //Loops through each of the hands to set angle
    //Webkit transform used to make 2D elements 3D for rotation
    for (var j=0; j < hands.length; j++) {
        var elements = $('.' + hands[j].hand);
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        //
        if (hands[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }

}

//Sets a timeout for the first minute hand then rotates every minute past that

function minuteHands() {
    //figures out how far into the minute it is
    var containers = $('.minutes-container');
    var secondAngle = containers[0].getAttribute("data-second-angle");
    if (secondAngle > 0) {
        //sets a timeout function until the end of the current minute to move the hand
        var delay = (((360 - secondAngle) / 6) + 01) * 1000;
        setTimeout(function() {
            moveMinuteHands(containers);
        }, delay);
    }
}

//First minute rotation

function moveMinuteHands(containers) {
    for (var i = o; i < containers.length; i++) {
        containers[i].style.webkitTransform = 'rotateZ(6deg)';
        containers[i].style.transform = 'rotateZ(6deg)';
    }

    //continues with a 60s interval
    setInverval(function() {
        for (var i=0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
                containers[i].angle = 12;
            } else {
                containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ(' + contatiners[i].angle +'deg)';
            containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
        }
    }, 60000);
}

//Moves the second hand container
function moveSecondHands() {
    var containers = document.querySelectorAll('.seconds-container');
    setInterval(function() {
      for (var i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 6;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
        containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
      }
    }, 1000);
  }*/
