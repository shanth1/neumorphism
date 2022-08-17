/* Clock */
const deg = 6;
const hour = document.querySelector('.clock__hour');
const minute = document.querySelector('.clock__minute');
const second = document.querySelector('.clock__second');

// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'
const transition = 'transition: 0.0s '

let date = new Date();

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

    
    indicators[Math.round(day.getSeconds())].style.height = `340px`;

    if (Math.round(day.getSeconds())===0){
        indicators[59].style.height = `335px`;
    }else{
        indicators[Math.round(day.getSeconds())-1].style.height = `335px`;
    }
    
    hour.style = `transform: rotate(${(hrDeg)+(mnDeg/12)}deg);  ${transition}`;
    minute.style = `transform: rotate(${mnDeg}deg); ${transition}`;
    second.style = `transform: rotate(${scDeg}deg);  ${transition}`;
})

console.log(date.getDate())

let indicators = []
for (let i = 0; i < 60; i++) {
    let clock = document.createElement('div')
    clock.className = 'clock__indicator'
    indicators.push(clock)
    if (i%5===0){
        indicators[i].style.backgroundSize = `10px`
    }
    indicators[i].style.height = '335px'
    indicators[i].style.rotate = `${i*6}deg`
    document.querySelector('.clock').append(indicators[i])
}






