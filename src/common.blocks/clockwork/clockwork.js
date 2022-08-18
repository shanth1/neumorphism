/* Clock */
const deg = 6;
let hourCorrection = 12
const hour = document.querySelector('.clockwork__hour');
const minute = document.querySelector('.clockwork__minute');
const second = document.querySelector('.clockwork__second');

// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'
const transition = 'transition: 0.3s '

// let date = new Date();

let mnVal = date.getMinutes()
let scVal = date.getSeconds()

let hrDeg = date.getHours() * 30
let mnDeg = date.getHours() * 360 + date.getMinutes() * deg
let scDeg = date.getMinutes() * 360 + date.getSeconds() * deg

hour.style.transform = `rotate(${(hrDeg)+(mnDeg/12)}deg)`;
minute.style.transform = `rotate(${mnDeg}deg)`;
second.style.transform = `rotate(${scDeg}deg)`;

setInterval(() => {
    let day = new Date();

    hrDeg = day.getHours() * 30
    mnDeg = day.getHours() * 360 + day.getMinutes() * deg
    scDeg = day.getMinutes() * 360 + day.getSeconds() * deg 

    hrVal = day.getHours()
    mnVal = day.getMinutes()
    scVal = day.getSeconds()
    
    clockfaceSerifs[day.getSeconds()].style.height = `340px`;
    clockfaceSerifs[day.getMinutes()].style.backgroundColor = 'red';

    
    if(day.getHours() >= 12){
        clockfaceNumbers[day.getHours() - hourCorrection].firstChild.style.color = 'red';
        // дублирование кода 
        if ((day.getHours() - hourCorrection) === 0){
            clockfaceNumbers[11].firstChild.style.color = 'bisque';
        }else {
            clockfaceNumbers[day.getHours() - hourCorrection -1].firstChild.style.color = 'bisque';
        }
    }else{
        clockfaceNumbers[Math.round(day.getHours())].firstChild.style.color = 'red';
        // Дублирование кода 
        if ((day.getHours()) === 0){
            clockfaceNumbers[11].firstChild.style.color = 'bisque';
        }else {
            clockfaceNumbers[day.getHours()-1].firstChild.style.color = 'bisque';
        }
    }

    if (day.getMinutes()===0){
        clockfaceSerifs[59].style.backgroundColor = 'bisque';
    }else{
        clockfaceSerifs[day.getMinutes()-1].style.backgroundColor = 'bisque';
    }

    if (day.getSeconds()===0){
        clockfaceSerifs[59].style.height = `335px`;
    }else{
        clockfaceSerifs[day.getSeconds()-1].style.height = `335px`;
    }
    
    if(hrVal + mnVal + scVal === 0){
        setIndicators();
    }

    hour.style = `transform: rotate(${(hrDeg)+(mnVal/2)}deg);  ${transition}`;
    minute.style = `transform: rotate(${mnDeg + scVal/10}deg); ${transition}`;
    second.style = `transform: rotate(${scDeg}deg);  ${transition}`;
})
