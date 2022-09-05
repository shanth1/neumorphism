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

const getOpacity = function(currentY, minY, maxY){
    // opacity = y - min / max - min
    return (currentY - minY) / (maxY - minY)
}

const switchLights = function(){
    lightsArr[0].style.opacity = 1 - getOpacity(window.scrollY, 0, sliderCoords, 1)
    if (window.scrollY > sliderCoords){
        lightsArr[1].style.opacity =1 - getOpacity(window.scrollY, sliderCoords, (bottomCoords))
    }else if (window.scrollY < sliderCoords){
        lightsArr[1].style.opacity = getOpacity(window.scrollY, 0, sliderCoords)
    }else{
        lightsArr[1].style.opacity = 1
    }
    lightsArr[2].style.opacity = getOpacity(window.scrollY, sliderCoords, (bottomCoords))
}

switchLights()

window.addEventListener('scroll', ()=>{
    switchLights()
})

window.addEventListener('resize', ()=>{
    sliderCoords = getCoords(sliderEl).top + (document.querySelector('.slider').clientHeight /2) - (document.documentElement.clientHeight/2)
    bottomCoords = document.body.scrollHeight-document.documentElement.clientHeight
})
