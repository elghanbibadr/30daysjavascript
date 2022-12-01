// let currentDate=new Date();
import { convert24hourFormatTo12hour } from './CoverterFunction.js';

let secondsSlider = document.querySelector('.secondSlider');
 let minuteSlider = document.querySelector('.minuteSlider');
 let hourSlider = document.querySelector('.hourSlider')
 let degreePerSecond = 6;
 let degreePerMinuteForHourSlide = 0.5;

class Clock {
    constructor(){}
   
    update(){
            let currentDate = new Date();
            let hour = currentDate.getHours();
            let seconds = currentDate.getSeconds();
            let minute = currentDate.getMinutes();
            let convertedHour = convert24hourFormatTo12hour(hour)
            this.rotateSliders(seconds, minute, convertedHour);
    }
   
      rotateSliders(seconds, minute, hour) {
            let rotateSecondSliderBy = seconds * degreePerSecond;
            let rotateMinuteSliderBy = minute * degreePerSecond;
            let rotateHourSliderBy = (hour * 60 + minute) * degreePerMinuteForHourSlide;
            secondsSlider.style.transform = `rotate(${270 + rotateSecondSliderBy}deg)`
            minuteSlider.style.transform = `rotate(${270 + rotateMinuteSliderBy}deg)`
            hourSlider.style.transform = `rotate(${270 + rotateHourSliderBy}deg)`
        }
        
        
}
    

export const clock = new Clock();





