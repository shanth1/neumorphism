const transition = '500ms'

//Получение массива слайдов
const slideClass = 'slider__slide'
const slidesArr = document.querySelectorAll(`.${slideClass}`)

const previousClass = 'slider_previous'
const currentClass = 'slider_current'
const nextClass = 'slider_next'

//Регулярки
const RegCurrent = new RegExp(`${currentClass}`, '')
const RegPrevNext = new RegExp(`${previousClass}|${nextClass}`, '');
const RegFull = new RegExp(`${nextClass}|${currentClass}|${previousClass}`, '');

const defineElement = function(className, index){
    let element
    if (index !== undefined){
        element = slidesArr[index];
        element.classList.add(className)
    }else{
        element = document.querySelector(`.${className}`);
    }
    element.style.transition = transition;
    element.style.display = '';

    return element
}

const shiftElements = function(currentEl, anotherEl, directionReverse){
    currentEl.className = currentEl.className.replace(currentClass, directionReverse)
    anotherEl.className = anotherEl.className.replace(anotherEl.className.match(RegPrevNext), currentClass)
}

const clearElement = function(element){
    element.classList.remove(element.className.match(RegFull))
    element.style.display = 'none'
}

const removeClasses = function(elementArr, classNameArr){
    elementArr.forEach((el, index) => {
        el.classList.remove(classNameArr[index])
    });
}
const setClasses = function(elementArr, classNameArr){
    elementArr.forEach((el, index) => {
        el.classList.add(classNameArr[index])
    });
}

const getCurrentIndex = function(){
    let index = 0
    let currentIndex = index

    while(!slidesArr[index].className.match(RegCurrent)){
        index++
        currentIndex = index
    }
    
    return currentIndex
}

const getCorrectionIndex = function(direction){
    let correctionIndex

    if (direction === previousClass){
        correctionIndex = -1
    }else if (direction === nextClass){
        correctionIndex = 1
    }else {
        alert('wrong direction')
    }
    
    return correctionIndex
}

export { shiftElements, setClasses, getCorrectionIndex, defineElement, getCurrentIndex, removeClasses, clearElement, transition, slidesArr, currentClass, nextClass, previousClass }