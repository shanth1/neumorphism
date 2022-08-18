let clockfaceSerifs = []
for (let i = 0; i < 60; i++) {
    let serif = document.createElement('div')
    serif.className = 'clockface__serif'


    clockfaceSerifs.push(serif)
    if (i%5===0){
        clockfaceSerifs[i].style.width = `10px`
    }
    clockfaceSerifs[i].style.height = '335px'
    clockfaceSerifs[i].style.rotate = `${i*6}deg`
    document.querySelector('.clockface').append(clockfaceSerifs[i])
}

let clockfaceNumbers = []
for (let i = 0; i < 12; i++) {
    let numberWrap = document.createElement('div')
    numberWrap.className = 'clockface__number-wrap'

    let number = document.createElement('div')
    number.className = 'clockface__number'
    if(i===0){
        number.innerHTML = 12
    }else{
        number.innerHTML = i
    }
    number.style.rotate=`${i*-30}deg`
    
    numberWrap.append(number)

    clockfaceNumbers.push(numberWrap)
    clockfaceNumbers[i].style.height = '335px'
    clockfaceNumbers[i].style.rotate = `${i*30}deg`
    document.querySelector('.clockface').append(clockfaceNumbers[i])
}

let daysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

let dayMonth = document.querySelector('.clockface__day-month')
dayMonth.innerHTML = date.getDate()
let dayWeek = document.querySelector('.clockface__day-week')
dayWeek.innerHTML = daysOfWeek[date.getDay()]

function setIndicators(){
    dayMonth.innerHTML = date.getDate()
    dayWeek.innerHTML = daysOfWeek[date.getDay()]
}



