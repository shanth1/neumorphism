let wrap =[]
for (let i = 0; i < 60; i++) {
    let wrapElement = createElement('clockface__wrap', 'div')
    let serif = createElement('clockface__serif', 'div')
    let light = createElement('clockface__light', 'div')
    
    wrapElement.append(serif) //childNodes[0], firstChild
    wrapElement.append(light) //childNodes[1]

    wrap.push(wrapElement)
    wrap[i].style.rotate = `${i*6}deg` 
    
    if (i%5===0){
        wrap[i].firstChild.style.width = `10px`

        let number = createElement('clockface__number', 'div')
        wrapElement.append(number) //childNodes[2], lastChild
        if(i===0){
            number.innerHTML = 12
        }else{
            number.innerHTML = i/5
        }
        number.style.rotate=`${i/5*-30}deg`
    }

    wrap[i].style.rotate = `${i*6}deg`
    document.querySelector('.clockface').append(wrap[i])
}

function clockFace(day){
    wrap[day.getSeconds()].style.paddingTop = `6px`;
    wrap[day.getMinutes()].firstChild.style.backgroundColor = 'red';

    
    if(day.getHours() >= 12){
        wrap[(day.getHours() - hourCorrection)*5].childNodes[2].style.color = 'red';
        // дублирование кода 
        if (((day.getHours() - hourCorrection) * 5) === 0){
            wrap[11 * 5].childNodes[2].style.color = 'bisque';
        }else {
            wrap[(day.getHours() - hourCorrection -1) * 5].childNodes[2].style.color = 'bisque';
        }
    }else{
        wrap[day.getHours()*5].firstChild.style.color = 'red';
        // Дублирование кода 
        if ((day.getHours()) === 0){
            wrap[11*5].firstChild.style.color = 'bisque';
        }else {
            wrap[(day.getHours()-1)*5].firstChild.style.color = 'bisque';
        }
    }

    // Обратная стрелка
    if (day.getMinutes()===0){
        wrap[59].firstChild.style.backgroundColor = 'bisque';
    }else{
        wrap[day.getMinutes()-1].firstChild.style.backgroundColor = 'bisque';
    }

    if (day.getSeconds()===0){
        wrap[59].style.paddingTop = `8px`;
    }else{
        wrap[day.getSeconds()-1].style.paddingTop = `8px`;
    }
    
    if(hrVal + mnVal + scVal === 0){
        setIndicators();
    }
}

function createElement(className, tagName){
    let element = document.createElement(tagName)
    element.className = className
    return element
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



