const lightsArr = document.querySelectorAll('.light');
const sliderEl = document.querySelector('.slider');

const shineCenterArr = document.querySelectorAll('.light__shine_position_center');
const shineRightArr = document.querySelectorAll('.light__shine_position_right');
const shineLeftArr = document.querySelectorAll('.light__shine_position_left');

const increase = 'increase';
const decrease = 'decrease';

const shineSpeed = 1;
const elementsObject = {
    wolfram: {
        arr: document.querySelectorAll('.light__wolfram_on'), // Фантомный класс,
        speed: 4
    },
    triangle: {
        arr: document.querySelectorAll('.light__triangle'),
        speed: 4
    },  
    glowCenter: {
        arr: document.querySelectorAll('.light__glow_center'),
        speed: 3
    },
    glowMiddle: {
        arr: document.querySelectorAll('.light__glow_middle'),
        speed: 2
    },  
    glowExternal: {
        arr: document.querySelectorAll('.light__glow_external'),
        speed: 1
    }, 
    shineCenter: {
        arr: shineCenterArr,
        speed: shineSpeed
    }
};

const getElementCoords = function(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
};

const getSliderCenterCoords = function(){
    return getElementCoords(sliderEl).top + (document.querySelector('.slider').clientHeight /2) - (document.documentElement.clientHeight/2)
};

const getBottomCoords = function(){
    return document.body.scrollHeight-document.documentElement.clientHeight
};

const addEventListenerOnLights = function(){
    lightsArr[0].addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    lightsArr[1].addEventListener('click', ()=>{
        sliderEl.scrollIntoView({
            block: "center", 
            behavior: "smooth"
        });
    });
    
    lightsArr[2].addEventListener('click', ()=>{
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
};

const getOpacity = function(currentY, minY, maxY, speed, brightness){
    // opacity = y - min / max - min
    if(brightness === 'increase'){
        // появление
        return ((currentY - minY) * speed)/ (maxY - minY);
    }else if (brightness === 'decrease'){
        // угасание 
        return speed - ((currentY - minY) * speed)/ (maxY - minY);
    }else{
        alert('error of direction light');
    };
};

// направления увеличения яркости: сверху вниз
const switchLights = function(){
    if (window.scrollY < sliderCoords){ //выше центра
        for (const elementKey in elementsObject) {
            let element = elementsObject[elementKey];
            
            let arr = element.arr;
            let speed = element.speed;

            arr[0].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, speed, decrease);
            arr[1].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, speed, increase);
            arr[2].style.opacity = 0            
        };
        shineRightArr[0].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, shineSpeed, increase);
        shineLeftArr[1].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, shineSpeed, decrease);
        shineLeftArr[2].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, shineSpeed, increase);

    }else{ // ниже центра
        for (const elementKey in elementsObject) {
            let element = elementsObject[elementKey];
            
            let arr = element.arr;
            let speed = element.speed;
    
            arr[0].style.opacity = 0; 
            arr[1].style.opacity = getOpacity(window.scrollY, sliderCoords, bottomCoords, speed, decrease);
            arr[2].style.opacity = getOpacity(window.scrollY, sliderCoords, bottomCoords, speed, increase);
        } 
        shineRightArr[0].style.opacity = getOpacity(window.scrollY, sliderCoords, bottomCoords, shineSpeed, decrease);
        shineRightArr[1].style.opacity = getOpacity(window.scrollY, sliderCoords, bottomCoords, shineSpeed, increase);
        shineLeftArr[2].style.opacity = getOpacity(window.scrollY, sliderCoords, bottomCoords, shineSpeed, decrease);
    };
};

//Код
let sliderCoords = getSliderCenterCoords();
let bottomCoords = getBottomCoords();

addEventListenerOnLights();
switchLights();

window.addEventListener('scroll', ()=>{
    switchLights();
});

window.addEventListener('resize', ()=>{
    sliderCoords = getSliderCenterCoords();
    bottomCoords = getBottomCoords();
})
