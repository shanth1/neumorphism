const { createElement } = require('../../index.js');

const hourCorrection = 12
const deg = 6;

const daysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

let wrap =[]

function renderClockfaceWrapElement(){
    for (let i = 0; i < 60; i++) {
        let wrapElement = createElement('clockface__wrap', 'div')
        let serif = createElement('clockface__serif', 'div')
        let light = createElement('clockface__light', 'div')

        wrapElement.append(serif) //childNodes[0], firstChild
        wrapElement.append(light) //childNodes[1]

        wrap.push(wrapElement)
        
        if (i%5===0){
            serif.classList.add('clockface__serif_2d_large_theme_light')
            
            let number = createElement('clockface__number', 'div')
            wrapElement.append(number) //childNodes[2], lastChild
            if(i===0){
                number.innerHTML = 12
            }else{
                number.innerHTML = i/5
            }
            number.style.rotate=`${i/5*-30}deg`
        }else{
            serif.classList.add('clockface__serif_2d_small_theme_light')
        }

        wrap[i].style.cssText = `transform: rotate(${i*6}deg);`
        document.querySelector('.clockface').append(wrap[i])
    }
}

function getColor(){
    return 'hsl(' + 360*Math.random() + ', ' +
            (25+70*Math.random()) + '%' + ', ' +
            (85 + 10*Math.random()) + '%)'
}

function clockFace(dateValues){
    let dayMonth = document.querySelector('.clock__day-month')
    dayMonth.innerHTML = dateValues.date
    let dayWeek = document.querySelector('.clock__day-week')
    dayWeek.innerHTML = daysOfWeek[dateValues.day]

    // Установка текущей стрелки (минуты и секунды)
    wrap[dateValues.scVal].firstChild.style = 'transform: translate(0, -4px);';
    wrap[dateValues.mnVal].firstChild.style.backgroundColor = 'red';

    // Цвета лампочек
    wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = getColor()
    if(Math.round(10*Math.random())===5){
        wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = 'red'
    }
    
    //Часовая стрелка
    if(dateValues.hrVal >= 12){
        wrap[(dateValues.hrVal - hourCorrection)*5].childNodes[2].style.color = 'red';
        // дублирование кода 
        //Обнуление предыдущего часа
        if (((dateValues.hrVal - hourCorrection) * 5) === 0){
            wrap[11 * 5].childNodes[2].style.color = '';
        }else {
            wrap[(dateValues.hrVal - hourCorrection -1) * 5].childNodes[2].style.color = '';
        }
    }else{
        wrap[dateValues.hrVal*5].childNodes[2].style.color = 'red';
        // Дублирование кода 
        //Обнуление предыдущего часа
        if ((dateValues.hrVal) === 0){
            wrap[11*5].childNodes[2].style.color = '';
        }else {
            wrap[(dateValues.hrVal-1)*5].childNodes[2].style.color = '';
        }
    }

    // Предыдущее состояние стрелки
    // Минуты
    if (dateValues.mnVal===0){
        wrap[59].firstChild.style.backgroundColor = '';
    }else{
        wrap[dateValues.mnVal-1].firstChild.style.backgroundColor = '';
    }
    //Секунды
    if (dateValues.scVal===0){
        wrap[59].firstChild.style = ``;
    }else{
        wrap[dateValues.scVal-1].firstChild.style = ``;
    }
    
    //Переключение даты
    if(dateValues.hrVal + dateValues.mnVal + dateValues.scVal === 0){
        setIndicators();
    }
}


function setIndicators(){
    dayMonth.innerHTML = dateValues.date
    dayWeek.innerHTML = daysOfWeek[dateValues.day]
}




export {clockFace, setIndicators, renderClockfaceWrapElement}



