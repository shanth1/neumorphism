const { clockWork } = require('../clockwork/clockwork.js');
const { clockFace } = require('../clockface/clockface.js');

const mouseHover = document.querySelector('.clock__mouse-hover')
const clock = document.querySelector('.clock')
const clockCase = document.querySelector('.clock__case')
const clockBack = document.querySelector('.clock__back')

console.log(clockCase.clientHeight)
console.log(clockCase.clientWidth)

mouseHover.addEventListener('mouseover', ()=>{
    clockCase.setAttribute('style', `width: ${clockCase.clientWidth+20}px; height: ${clockCase.clientHeight+20}px;`)
    clockBack.setAttribute('style', `width: ${clockCase.clientWidth+50}px; height: ${clockCase.clientHeight+50}px;`)
})
mouseHover.addEventListener('mouseout', ()=>{
    clockCase.setAttribute('style', '' )
    clockBack.setAttribute('style', '' )
})

let date = getDate()

function getDate(){
    return new Date();
}

function getDateValues(date){
    return {
        date: date.getDate(),
        day: date.getDay(),

        hrDeg: date.getHours() * 30,
        mnDeg: date.getHours() * 360 + date.getMinutes() * 6,
        scDeg: date.getMinutes() * 360 + date.getSeconds() * 6,

        hrVal: date.getHours(),
        mnVal: date.getMinutes(),
        scVal: date.getSeconds(),
    }
}

clockWork(getDateValues(date), false)
let interval = setInterval(()=>{
    let date = getDate()
    let dateValues = getDateValues(date)

    clockWork(dateValues, true)
    clockFace(dateValues)
})

export {interval}





