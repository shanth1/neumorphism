/* Clock */
const deg = 6;
let hourCorrection = 12
const hour = document.querySelector('.clockwork__hour');
const minute = document.querySelector('.clockwork__minute');
const second = document.querySelector('.clockwork__second');

// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'
const transition = 'transition: 0.3s '

let mnVal = date.getMinutes()
let scVal = date.getSeconds()

//Дублирование кода
let hrDeg = date.getHours() * 30
let mnDeg = date.getHours() * 360 + date.getMinutes() * deg
let scDeg = date.getMinutes() * 360 + date.getSeconds() * deg

//Дублирование кода
console.log('установка без анимации')
hour.style.transform = `rotate(${(hrDeg)+(mnVal/2)}deg)`;
minute.style.transform = `rotate(${mnDeg}deg)`;
second.style.transform = `rotate(${scDeg}deg)`;

function clockWork(day){
    hrDeg = day.getHours() * 30
    mnDeg = day.getHours() * 360 + day.getMinutes() * deg
    scDeg = day.getMinutes() * 360 + day.getSeconds() * deg 

    hrVal = day.getHours()
    mnVal = day.getMinutes()
    scVal = day.getSeconds()

    console.log('установка с анимацией')
    hour.style = `transform: rotate(${(hrDeg)+(mnVal/2)}deg);  ${transition}`;
    minute.style = `transform: rotate(${mnDeg + scVal/10}deg); ${transition}`;
    second.style = `transform: rotate(${scDeg}deg);  ${transition}`;
}
