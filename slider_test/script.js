
const listenerPrev = function(){
    let currentEl = document.querySelector('.current')
    let prevEl = document.querySelector('.prev')
    let backEL = document.querySelector('.back')
    let nextEL = document.querySelector('.next')
    currentEl.className = 'slide next'
    prevEl.className = 'slide current'
    backEL.className = 'slide prev'
    nextEL.className = 'slide back'
}

const listenerPages = function(){
    console.log('listenerPrev')
    
}

const listenerNext = function(){
    let currentEl = document.querySelector('.current')
    let backEL = document.querySelector('.back')
    let prevEl = document.querySelector('.prev')
    let nextEL = document.querySelector('.next')
    currentEl.className = 'slide prev'
    backEL.className = 'slide next'
    prevEl.className = 'slide back'
    nextEL.className = 'slide current'
}

const slidesArr = document.querySelectorAll('.slide')

// pagArr.forEach((item, index, arr)=>{
//     item.addEventListener('click', {handleEvent: listenerPages, arr: arr, item: item, index: index}, {once: true})
// })

document.querySelector('.prev-btn').addEventListener('click', {handleEvent: listenerPrev, arr: slidesArr})
document.querySelector('.next-btn').addEventListener('click', {handleEvent: listenerNext, arr: slidesArr})