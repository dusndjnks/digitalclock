const hrs = document.querySelector("#hrs")
const min = document.querySelector("#min")
const sec = document.querySelector("#sec")

let section1 = document.getElementById("section1")

 
const displayTime=()=>{
    let hours=(new Date().getHours());
    let minutes=(new Date().getMinutes());
    let seconds=(new Date().getSeconds());

    if(hours>=12){
        section1.innerHTML="pm"
    }else{
        section1.innerHTML="am"
    }

    if (hours>12){
        hours=hours-12
    }

    if (seconds<10){
        seconds="0"+seconds
    }

    if (hours<10){
        hours="0"+hours
    }

    if (minutes<10){
        minutes="0"+minutes
    }

    hrs.innerHTML = hours
    min.innerHTML = minutes
    sec.innerHTML = seconds

}
setInterval(displayTime,10)


