const { clearElement, setClasses, removeClasses, getCorrectionIndex, getCurrentIndex, shiftElements, defineElement,  transition, slidesArr, currentClass, nextClass, previousClass  } = require('../slider/slider.js');

const prevBtnClass = 'pagination__btn-prev'
const paginationClass = 'pagination__btn'
const nextBtnClass = 'pagination__btn-next'

const paginationActiveSwitch = function(currentIndex, index, theme){
    removeClasses([paginationArr[currentIndex], paginationArr[index]], ['pagination__btn_status_active_' + theme, 'pagination__btn_theme_' + theme])
    setClasses([paginationArr[currentIndex], paginationArr[index]], ['pagination__btn_theme_' + theme, 'pagination__btn_status_active_' + theme])
}

const paginationActiveThemeControl = function(currentIndex, index){
    if(Array.from(paginationArr[currentIndex].classList).find(el => el.match(/active/)).endsWith('light')){
        paginationActiveSwitch(currentIndex, index, 'light')
    }else {
        paginationActiveSwitch(currentIndex, index, 'dark')
    }
}


const updateStatus = function(direction){
    let correctionIndex = getCorrectionIndex(direction)
    let currentIndex = getCurrentIndex()

    if (direction === previousClass && currentIndex === 0){
        clearElement(slidesArr[slidesArr.length - 1])
        paginationActiveThemeControl(currentIndex, slidesArr.length - 1)
        setClasses([slidesArr[slidesArr.length - 1]], [previousClass])
    }else if (direction === nextClass && currentIndex === slidesArr.length - 1){
        clearElement(slidesArr[0])
        paginationActiveThemeControl(currentIndex, 0)
        setClasses([slidesArr[0]], [nextClass])
    }else{
        clearElement(slidesArr[currentIndex + correctionIndex])
        paginationActiveThemeControl(currentIndex, currentIndex + correctionIndex)
        setClasses([slidesArr[currentIndex + correctionIndex]], [direction])
    }
}

const timeoutSequence = function(currentEl, anotherEl, direction, btnStatus){
    let directionReverse = (direction === nextClass) ? previousClass : nextClass
    let listener = (direction === nextClass) ? listenerNext : listenerPrev

    setTimeout(()=>{
        shiftElements(currentEl, anotherEl, directionReverse)
    }) 
    setTimeout(()=>{
        clearElement(currentEl)
        if(btnStatus){
            document.querySelector(`.${btnStatus}`).addEventListener('click', listener, {once: true});
        }
    }, transition.replace('ms', ''))
}

const listenerPrev = function(){
    updateStatus(previousClass)
    timeoutSequence(defineElement(currentClass), defineElement(previousClass), previousClass, prevBtnClass)
}

const listenerPages = function(){
    let index = this.index
    let currentIndex = getCurrentIndex()

    paginationActiveThemeControl(currentIndex, index)

    if (index > currentIndex){
        //Next
        timeoutSequence(defineElement(currentClass), defineElement(nextClass, index), nextClass, false)
    }else if(index === currentIndex){
        console.log('та же кнопка')
    }else if(index < currentIndex){
        //Prev
        timeoutSequence(defineElement(currentClass), defineElement(previousClass, index), previousClass, false)
    }else{
        alert('Ошибка')
    }
}

const listenerNext = function(){
    updateStatus(nextClass)
    timeoutSequence(defineElement(currentClass), defineElement(nextClass), nextClass, nextBtnClass)
}


let paginationArr = [document.querySelector('.pagination__btn')]



//Проверка вохможности слайдера 
if (slidesArr.length>1){
    slidesArr[0].classList.add(currentClass)
    document.querySelector(`.${prevBtnClass}`).addEventListener('click', listenerPrev, {once: true})
    document.querySelector(`.${nextBtnClass}`).addEventListener('click', listenerNext, {once: true})
}else{
    console.log('Мало элементов для слайдера')
}

for (let index = 1; index < slidesArr.length; index++) {
    let pagPage = document.createElement('div')
    pagPage.classList.add(paginationClass)
    pagPage.classList.add('pagination__btn_theme_light')
    pagPage.innerHTML = index + 1

    paginationArr.push(pagPage)
    document.querySelector(`.${nextBtnClass}`).before(pagPage)
}
document.querySelectorAll(`.${paginationClass}`).forEach((el, index)=>{
    el.addEventListener('click', {handleEvent: listenerPages, index: index})
})











