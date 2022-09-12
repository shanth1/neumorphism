
const glowExternalArr = document.querySelectorAll('.light__glow_external');
const glowMiddleArr = document.querySelectorAll('.light__glow_middle');
const glowCenterArr = document.querySelectorAll('.light__glow_center');

const shineCenterArr = document.querySelectorAll('.light__shine_position_center');
const shineRightArr = document.querySelectorAll('.light__shine_position_right');
const shineLeftArr = document.querySelectorAll('.light__shine_position_left');

const wolframArr = document.querySelectorAll('.light__wolfram_power_on');
const triangleArr = document.querySelectorAll('.light__triangle');

const shineArr = [
    shineLeftArr,
    shineCenterArr,
    shineRightArr
]

const elementsArr = [
    [wolframArr, 4],
    [glowCenterArr, 4],
    [glowMiddleArr, 2],
    [glowExternalArr, 1],
    [triangleArr, 4]
]
console.log(glowExternalArr)
const lightsArr = document.querySelectorAll('.light');
const sliderEl = document.querySelector('.slider');

lightsArr[0].addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

lightsArr[1].addEventListener('click', ()=>{
    sliderEl.scrollIntoView({
        block: "center", 
        behavior: "smooth"
    });
})

lightsArr[2].addEventListener('click', ()=>{
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
})


function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
}

let sliderCoords = getCoords(sliderEl).top + (document.querySelector('.slider').clientHeight /2) - (document.documentElement.clientHeight/2)
let bottomCoords = document.body.scrollHeight-document.documentElement.clientHeight

const getOpacity = function(currentY, minY, maxY, speed, reverse){
    // opacity = y - min / max - min
    if (!speed){
        speed = 1
    }
    let opacity

    if(reverse){
        opacity = speed - ((currentY - minY) * speed)/ (maxY - minY)
    }else{
        opacity = ((currentY - minY) * speed)/ (maxY - minY)
    }

    return opacity
}

const switchLights = function(){


    elementsArr.forEach((el, index)=>{
        el[0][0].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, el[1], true)
    })
    shineCenterArr[0].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, 1, true)
    shineRightArr[0].style.opacity =  getOpacity(window.scrollY, 0, sliderCoords, 1, false)
    shineLeftArr[0].style.opacity =  0
    
    elementsArr.forEach((el, index)=>{
        el[0][2].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords), el[1], false)
        shineCenterArr[2].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords), 1, false)
        shineLeftArr[2].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords), 1, true)
        shineRightArr[2].style.opacity = 0
        
    })

    if (window.scrollY > sliderCoords){ //ниже
        elementsArr.forEach((el, index)=>{
            el[0][1].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords), el[1], true)
        })
        shineRightArr[0].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords), 1, true)
        shineRightArr[1].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords), 1, false)
        shineCenterArr[1].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords), 1, true)
        
        
    }else if (window.scrollY < sliderCoords){ // выше
        elementsArr.forEach((el, index)=>{
            el[0][1].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, el[1], false)
        })
        shineLeftArr[2].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, 1, false)
        shineLeftArr[1].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, 1, true)
        shineCenterArr[1].style.opacity = getOpacity(window.scrollY, 0, sliderCoords, 1, false)
        shineRightArr[1].style.opacity = 0

    }else{
        elementsArr.forEach((el, index)=>{
            el[0][1].style.opacity = 1
        })
        shineCenterArr[1].style.opacity = 1
    }
    
}

switchLights()

window.addEventListener('scroll', ()=>{
    switchLights()
})

window.addEventListener('resize', ()=>{
    sliderCoords = getCoords(sliderEl).top + (document.querySelector('.slider').clientHeight /2) - (document.documentElement.clientHeight/2)
    bottomCoords = document.body.scrollHeight-document.documentElement.clientHeight
})
