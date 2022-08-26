require('./style.css');
require('./common.blocks/clock/clock.js');
require('./common.blocks/pagination/pagination.js');
require('./common.blocks/switchers/switchers.js');

function themeSwitcher(element, theme){
    let className = Array.from(element.classList).find(el => el.match(/theme/))
    //Проверка на наличие класса с темой
    if(className){
        if (theme === 'light'){
            element.classList.remove(className)
            element.classList.add(className.replace('dark', 'light'))
        }else if (theme === 'dark'){
            element.classList.remove(className)    
            element.classList.add(className.replace('light', 'dark'))
        }
    }
}

function createElement(className, tagName){
    let element = document.createElement(tagName)
    element.className = className
    return element
}

function getDate(){
    return new Date();
}

export {themeSwitcher, createElement, getDate}