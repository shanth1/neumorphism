/* Clock */
const deg = 6;
const hour = document.querySelector('.clockwork__hour');
const minute = document.querySelector('.clockwork__minute');
const second = document.querySelector('.clockwork__second');

// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'
const transition = 'transition: 0.0s '

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

    mnVal = day.getMinutes()
    scVal = day.getSeconds()
    
    clockfaceSerifs[Math.round(day.getSeconds())].style.height = `340px`;

    if (Math.round(day.getSeconds())===0){
        clockfaceSerifs[59].style.height = `335px`;
    }else{
        clockfaceSerifs[Math.round(day.getSeconds())-1].style.height = `335px`;
    }
    
    hour.style = `transform: rotate(${(hrDeg)+(mnVal/2)}deg);  ${transition}`;
    minute.style = `transform: rotate(${mnDeg+scVal/10}deg); ${transition}`;
    second.style = `transform: rotate(${scDeg}deg);  ${transition}`;
})
