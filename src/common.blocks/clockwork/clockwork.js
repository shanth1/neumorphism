/* Clock */
const deg = 6;
let hourCorrection = 12
const hour = document.querySelector('.clockwork__hour');
const minute = document.querySelector('.clockwork__minute');
const second = document.querySelector('.clockwork__second');

// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'
const transition = 'transition: 0.3s '

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

    hrVal = day.getHours()
    mnVal = day.getMinutes()
    scVal = day.getSeconds()
    
    wrap[day.getSeconds()].style.paddingTop = `4px`;
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

    hour.style = `transform: rotate(${(hrDeg)+(mnVal/2)}deg);  ${transition}`;
    minute.style = `transform: rotate(${mnDeg + scVal/10}deg); ${transition}`;
    second.style = `transform: rotate(${scDeg}deg);  ${transition}`;
})
