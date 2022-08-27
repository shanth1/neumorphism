const listenerPrev = function(){
    let arr = this.arr

    let currentEl = document.querySelector('.current')
    let prevEl = document.querySelector('.prev')
    let backEL = document.querySelector('.back')
    let nextEL = document.querySelector('.next')
    currentEl.className = 'slide next'
    nextEL.className = 'slide back'
    prevEl.className = 'slide current'
    backEL.className = 'slide back'
    setTimeout(()=>{
        let currentIndex
        arr.forEach((el, index)=>{
            if (el.className.endsWith('current')){
                currentIndex = index
            }
        })
        if (currentIndex === 0){
            arr[arr.length - 1].className = 'slide prev'
        }else{
            arr[currentIndex - 1].className = 'slide prev'
        }
        document.querySelector('.prev-btn').addEventListener('click', {handleEvent: listenerPrev, arr: slidesArr}, {once: true})
    }, document.querySelector('.slide').style.transitionDuration.replace('ms', ''))
}

const listenerPages = function(){
    console.log('pag')
}

const listenerNext = function(){
    let arr = this.arr
    let currentEl = document.querySelector('.current')
    let prevEl = document.querySelector('.prev')
    let backEL = document.querySelector('.back')
    let nextEL = document.querySelector('.next')
    currentEl.className = 'slide prev'
    nextEL.className = 'slide current'
    prevEl.className = 'slide back'
    backEL.className = 'slide back'
    setTimeout(()=>{
        let currentIndex

        arr.forEach((el, index)=>{
            if (el.className.endsWith('current')){
                currentIndex = index
            }
        })
        if (currentIndex === arr.length - 1){
            arr[0].className = 'slide next'
        }else{
            arr[currentIndex + 1].className = 'slide next'
        }
        document.querySelector('.next-btn').addEventListener('click', {handleEvent: listenerNext, arr: slidesArr}, {once: true})
    }, document.querySelector('.slide').style.transitionDuration.replace('ms', ''))
}

//Создание кнопок
const slidesArr = document.querySelectorAll('.slide')
for (let index = 1; index < slidesArr.length; index++) {
    let pagPage = document.createElement('div')
    pagPage.classList.add('pag')
    pagPage.innerHTML = index + 1
    document.querySelector('.next-btn').before(pagPage)
}

//возможен слайдер
if (slidesArr.length>1){
    slidesArr.forEach((el, i, arr)=>{
        el.style.transition = '1000ms'
        if (i===0){
            el.className = 'slide current'
        }else if(i===1){
            el.className = 'slide next'
        }else if(i === arr.length-1){
            el.className = 'slide prev'
        }else{
            el.className = 'slide back'
        }
    })
    
    document.querySelector('.prev-btn').addEventListener('click', {handleEvent: listenerPrev, arr: slidesArr}, {once: true})
    document.querySelector('.next-btn').addEventListener('click', {handleEvent: listenerNext, arr: slidesArr}, {once: true})

}else{
    console.log('Мало элементов для слайдер')
}

document.querySelectorAll('.pag').forEach((item, index, arr)=>{
    item.addEventListener('click', {handleEvent: listenerPages, arr: arr, item: item, index: index})
})
