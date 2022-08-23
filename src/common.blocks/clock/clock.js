let date = getDate()
console.log(date.getHours())

const hourCorrection = 12
const deg = 6;

function getDate(){
    return new Date();
}

function getDateValues(date){
    return dateValues = {
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

setInterval(()=>{
    let date = getDate()
    let dateValues = getDateValues(date)

    clockWork(dateValues)
    clockFace(dateValues)
})

function createElement(className, tagName){
    let element = document.createElement(tagName)
    element.className = className
    return element
}





