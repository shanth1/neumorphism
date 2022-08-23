const { clockWork } = require('../clockwork/clockwork.js');
const { clockFace } = require('../clockface/clockface.js');

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





