const transition = '500ms'

const slideClass = 'slide'

const currentClass = 'current'
const previousClass = 'prev'
const nextClass = 'next'

const prevBtnClass = 'prev-btn'
const paginationClass = 'pag'
const nextBtnClass = 'next-btn'

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

    return element
}

const shiftElements = function(currentEl, anotherEl, directionReverse){
    currentEl.className = currentEl.className.replace(currentClass, directionReverse)
    anotherEl.className = anotherEl.className.replace(anotherEl.className.match(RegPrevNext), currentClass)
}

const removeClass = function(element){
    element.classList.remove(element.className.match(RegFull))
}

const getCurrentIndex = function(){
    let index = 0
    let currentIndex = index

    while(!slidesArr[index].className.endsWith(currentClass)){
        index++
        currentIndex = index
    }
    
    return currentIndex
}

const updateStatus = function(direction){
    let correctionIndex 
    if (direction === previousClass){
        correctionIndex = -1
    }else if (direction === nextClass){
        correctionIndex = 1
    }else {
        alert('wrong direction')
    }

    let currentIndex = getCurrentIndex()

    if (direction === previousClass && currentIndex === 0){
        removeClass(slidesArr[slidesArr.length - 1])
        slidesArr[slidesArr.length - 1].classList.add(previousClass)
    }else if (direction === nextClass && currentIndex === slidesArr.length - 1){
        removeClass(slidesArr[0])
        slidesArr[0].classList.add(nextClass)
    }else{
        removeClass(slidesArr[currentIndex + correctionIndex])
        slidesArr[currentIndex + correctionIndex].classList.add(direction)
    }
}

const timeoutSequence = function(currentEl, anotherEl, direction, btnStatus){
    let directionReverse = (direction === nextClass) ? previousClass : nextClass
    let listener = (direction === nextClass) ? listenerNext : listenerPrev

    setTimeout(()=>{
        shiftElements(currentEl, anotherEl, directionReverse)
    }) 
    setTimeout(()=>{
        removeClass(currentEl)
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

//Получение массива слайдов
const slidesArr = document.querySelectorAll('.slide')

//Проверка вохможности слайдера 
if (slidesArr.length>1){
    slidesArr[0].classList.add(currentClass)
    document.querySelector(`.${prevBtnClass}`).addEventListener('click', listenerPrev, {once: true})
    document.querySelector(`.${nextBtnClass}`).addEventListener('click', listenerNext, {once: true})
    
}else{
    console.log('Мало элементов для слайдера')
}

//Создание кнопок пагинации
for (let index = 1; index < slidesArr.length; index++) {
    let pagPage = document.createElement('div')
    pagPage.classList.add(paginationClass)
    pagPage.innerHTML = index + 1
    document.querySelector(`.${nextBtnClass}`).before(pagPage)
}
document.querySelectorAll(`.${paginationClass}`).forEach((el, index)=>{
    el.addEventListener('click', {handleEvent: listenerPages, index: index})
})
