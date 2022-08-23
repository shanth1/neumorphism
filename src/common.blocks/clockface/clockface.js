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

function getColor(){
    return 'hsl(' + 360*Math.random() + ', ' +
            (25+70*Math.random()) + '%' + ', ' +
            (85 + 10*Math.random()) + '%)'
}

function clockFace(dateValues){

    let dayMonth = document.querySelector('.clockface__day-month')
    dayMonth.innerHTML = dateValues.date
    let dayWeek = document.querySelector('.clockface__day-week')
    dayWeek.innerHTML = daysOfWeek[dateValues.day]

    wrap[dateValues.scVal].style.paddingTop = `6px`;
    wrap[dateValues.mnVal].firstChild.style.backgroundColor = 'red';

    wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = getColor()

    if(Math.round(10*Math.random())===5){
        wrap[Math.round(59*Math.random())].childNodes[1].style.backgroundColor = 'red'
    }
    
    if(dateValues.hrVal >= 12){
        wrap[(dateValues.hrVal - hourCorrection)*5].childNodes[2].style.color = 'red';
        // дублирование кода 
        if (((dateValues.hrVal - hourCorrection) * 5) === 0){
            wrap[11 * 5].childNodes[2].style.color = 'bisque';
        }else {
            wrap[(dateValues.hrVal - hourCorrection -1) * 5].childNodes[2].style.color = 'bisque';
        }
    }else{
        wrap[dateValues.hrVal*5].childNodes[2].style.color = 'red';
        // Дублирование кода 
        if ((dateValues.hrVal) === 0){
            wrap[11*5].childNodes[2].style.color = 'bisque';
        }else {
            wrap[(dateValues.hrVal-1)*5].childNodes[2].style.color = 'bisque';
        }
    }

    // Обратная стрелка
    if (dateValues.mnVal===0){
        wrap[59].firstChild.style.backgroundColor = 'bisque';
    }else{
        wrap[dateValues.mnVal-1].firstChild.style.backgroundColor = 'bisque';
    }

    if (dateValues.scVal===0){
        wrap[59].style.paddingTop = `8px`;
    }else{
        wrap[dateValues.scVal-1].style.paddingTop = `8px`;
    }
    
    if(dateValues.hrVal + dateValues.mnVal + dateValues.scVal === 0){
        setIndicators();
    }
}



function setIndicators(){
    dayMonth.innerHTML = dateValues.date
    dayWeek.innerHTML = daysOfWeek[dateValues.day]
}



