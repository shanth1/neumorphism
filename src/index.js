require('./style.css');
// require('./common.blocks/slider/slider.js');
require('./common.blocks/pagination/pagination.js');
require('./common.blocks/clock/clock.js');
require('./common.blocks/switchers/switchers.js');

require('./common.blocks/lights/lights.js');


function themeSwitcher(element, theme){
    let className = Array.from(element.classList).find(el => el.match(/theme/))
    // let className = Array.from(element.classList).find(el => el.match(/theme|active/))
    console.log(className)
    //Проверка на наличие класса с темой
    if(className){
        if (theme === 'light'){
            console.log('меняем дарк на лайт')
            element.classList.remove(className)
            element.classList.add(className.replace('_dark', '_light'))
        }else if (theme === 'dark'){
            console.log('меняем лайт на дарк')
            element.classList.remove(className)    
            element.classList.add(className.replace('_light', '_dark'))
        }
    }
}

// function statusSwitcher(element, status){
//     let className = Array.from(element.classList).find(el => el.match(/status/))
//     if(className){
//         if (status === 'active'){
//             element.classList.remove(className)
//             element.classList.add(className.replace('_inactive', '_active'))
//         }else if (status === 'inactive'){
//             element.classList.remove(className)    
//             element.classList.add(className.replace('_active', '_inactive'))
//         }
//     }
// }

function createElement(className, tagName){
    let element = document.createElement(tagName)
    element.className = className
    return element
}

function getDate(){
    return new Date();
}

export {themeSwitcher, createElement, getDate}