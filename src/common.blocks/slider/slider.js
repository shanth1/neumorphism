const transition = '500ms'

const slideClass = 'slider__slide'

const currentClass = 'slider_current'
const previousClass = 'slider_previous'
const nextClass = 'slider_next'

const prevBtnClass = 'pagination__btn-prev'
const paginationClass = 'pagination__btn'
const nextBtnClass = 'pagination__btn-next'

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

const removeClass = function(element){
    element.classList.remove(element.className.match(RegFull))
    element.style.display = 'none'
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

    console.log(slidesArr[index].className)

    //Активная кнопка пагинации и темы
    if(Array.from(paginationArr[index].classList).find(el => el.match(/theme/)).endsWith('light')){
        paginationArr.forEach((el, elIndex)=>{
            if (elIndex !== index){
                paginationArr[elIndex].classList.remove('pagination__btn_status_active_light')
                paginationArr[elIndex].classList.add('pagination__btn_theme_light')
                paginationArr[index].addEventListener('click', this, {once: true})
            }
        })

        paginationArr[index].classList.remove('pagination__btn_theme_light')
        paginationArr[index].classList.add('pagination__btn_status_active_light')
    }else {
        paginationArr.forEach((el, elIndex)=>{
            if (elIndex !== index){
                paginationArr[elIndex].classList.remove('pagination__btn_status_active_dark')
                paginationArr[elIndex].classList.add('pagination__btn_theme_dark')
                paginationArr[index].addEventListener('click', this, {once: true})
            }
        })

        paginationArr[index].classList.remove('pagination__btn_theme_dark')
        paginationArr[index].classList.add('pagination__btn_status_active_dark')
    }

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
const slidesArr = document.querySelectorAll(`.${slideClass}`)

console.log(slidesArr)

//Проверка вохможности слайдера 
if (slidesArr.length>1){
    slidesArr[0].classList.add(currentClass)
    document.querySelector(`.${prevBtnClass}`).addEventListener('click', listenerPrev, {once: true})
    document.querySelector(`.${nextBtnClass}`).addEventListener('click', listenerNext, {once: true})
    
}else{
    console.log('Мало элементов для слайдера')
}

let paginationArr = [document.querySelector('.pagination__btn')]

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

// export {slidesArr, listenerPages}