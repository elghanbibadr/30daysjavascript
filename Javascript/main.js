// let currentDate=new Date();


let secondsSlider=document.querySelector('.secondSlider');
let minuteSlider=document.querySelector('.minuteSlider');
let hourSlider=document.querySelector('.hourSlider')
let slides=document.querySelectorAll('.slide');

let degreePerSecond=6;
let degreePerHour=30;

function rotateSlider(seconds,minute,hour){
 let rotateSecondSliderBy=seconds*degreePerSecond;
 let rotateMinuteSliderBy=minute*degreePerSecond;
 let rotateHourSliderBy=hour*degreePerHour;
secondsSlider.style.transform=`rotate(${270 + rotateSecondSliderBy}deg)`
minuteSlider.style.transform=`rotate(${270 + rotateMinuteSliderBy}deg)`
hourSlider.style.transform=`rotate(${270 + rotateHourSliderBy}deg)`
}



const convert24hourFormatTo12hour=(hour)=>{
    if (!(hour >= 12)) return;
    return hour% 12;
}


setInterval(()=>{
    let currentDate=new Date();
    let hour=currentDate.getHours();
    let seconds=currentDate.getSeconds();
     let minute=currentDate.getMinutes();
     let convertedHour=convert24hourFormatTo12hour(hour)
// let hour=currentDate.getHours();
    rotateSlider(seconds,minute,convertedHour)
,1000})