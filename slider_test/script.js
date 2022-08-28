const transition = '500ms'

const listenerPrev = function(){
    //обнуление при переходе. Можно убрать
    let nextEL = document.querySelector('.next')
    if(nextEL){
        nextEL.className = 'slide'
    }

    let arr = this.arr
    let currentEl = document.querySelector('.current');
    currentEl.style.transition = transition;
    
    arr.forEach((el, index)=>{
        if (el.className.endsWith('current')){
            currentIndex = index;
            if (currentIndex === 0){
                arr[arr.length - 1].className = 'slide prev'
            }else{
                arr[currentIndex - 1].className = 'slide prev'
            }
        }
    })
    
    let prevEL = document.querySelector('.prev');
    prevEL.classList.add('prev')
    prevEL.style.transition = transition;
    
    setTimeout(()=>{
        currentEl.className = 'slide next';
        prevEL.className = 'slide current';
    }) 
    setTimeout(()=>{
        let arr = this.arr;
        let currentIndex = 0;
        currentEl.style.transition = '';
        
        arr.forEach((el, index)=>{
            if (el.className.endsWith('current')){
                currentIndex = index;
                if (currentIndex === 0){
                    arr[arr.length - 1].className = 'slide prev'
                }else{
                    arr[currentIndex - 1].className = 'slide prev'
                }
                document.querySelector('.prev-btn').addEventListener('click', {handleEvent: listenerPrev, arr: slidesArr}, {once: true});
            }
        })
        currentEl.className = 'slide'
    }, transition.replace('ms', ''))
}

const listenerPages = function(){
    console.log('pag')
}


const listenerNext = function(){
    let arr = this.arr
    let currentEl = document.querySelector('.current');
    currentEl.style.transition = transition;
    
    //обнуление при переходе
    let prevEL = document.querySelector('.prev')
    if(prevEL){
        prevEL.className = 'slide'
    }

    arr.forEach((el, index)=>{
        if (el.className.endsWith('current')){
            currentIndex = index;
            if (currentIndex === arr.length - 1){
                arr[0].className = 'slide next';
            }else{
                arr[currentIndex + 1].className = 'slide next';
            }
        }
    })

    let nextEL = document.querySelector('.next');
    nextEL.style.transition = transition;
    
    setTimeout(()=>{
        nextEL.className = 'slide current';
        currentEl.className = 'slide prev';
    }) 
    setTimeout(()=>{
        let arr = this.arr;
        let currentIndex = 0;
        currentEl.style.transition = '';
        
        arr.forEach((el, index)=>{
            if (el.className.endsWith('current')){
                currentIndex = index;
                if (currentIndex === arr.length - 1){
                    arr[0].className = 'slide next';
                }else{
                    arr[currentIndex + 1].className = 'slide next';
                }
                document.querySelector('.next-btn').addEventListener('click', {handleEvent: listenerNext, arr: slidesArr}, {once: true});
            }
        })
        currentEl.className = 'slide';
    }, transition.replace('ms', ''))
}

//Создание кнопок
const slidesParent = document.querySelector('.slides')
const slidesArr = document.querySelectorAll('.slide')
for (let index = 1; index < slidesArr.length; index++) {
    let pagPage = document.createElement('div')
    pagPage.classList.add('pag')
    pagPage.innerHTML = index + 1
    document.querySelector('.next-btn').before(pagPage)
}

//возможен слайдер
if (slidesArr.length>1){
    slidesArr[0].classList.add('current')
    
    document.querySelector('.prev-btn').addEventListener('click', {handleEvent: listenerPrev, arr: slidesArr}, {once: true})
    document.querySelector('.next-btn').addEventListener('click', {handleEvent: listenerNext, arr: slidesArr}, {once: true})
    
}else{
    console.log('Мало элементов для слайдер')
}

document.querySelectorAll('.pag').forEach((item, index, arr)=>{
    item.addEventListener('click', {handleEvent: listenerPages, arr: arr, item: item, index: index})
})
