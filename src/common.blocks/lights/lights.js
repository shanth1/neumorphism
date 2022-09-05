import { createElement } from "../.."

const lightsArr = document.querySelectorAll('.light')
const sliderEl = document.querySelector('.slider')
console.log(lightsArr)

function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
}


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




let sliderCenterY = getCoords(sliderEl).top + (document.querySelector('.slider').clientHeight /2)
let devider1 = sliderCenterY - (document.documentElement.clientHeight/2)

window.addEventListener('scroll', ()=>{
    // y = x - min / max - min
    
    let currentCenterY = window.scrollY + (document.documentElement.clientHeight /2)
    lightsArr[0].style.opacity = 1- window.scrollY/devider1
    if (currentCenterY > sliderCenterY){
        //ниже центра

        lightsArr[1].style.opacity =1- (window.scrollY - devider1) / (document.body.scrollHeight-document.documentElement.clientHeight - devider1)
    }else{
        //выше центра
        lightsArr[1].style.opacity = window.scrollY / devider1
    }
    
    lightsArr[2].style.opacity = (window.scrollY - devider1) /(document.body.scrollHeight-document.documentElement.clientHeight - devider1)
})
