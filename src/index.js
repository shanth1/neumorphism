require('./common.blocks/switchers/switchers.js');
require('./style.css');
require('./common.blocks/clock/clock.js');

function themeSwitcher(element, theme){
    let className = Array.from(element.classList).find(el => el.match(/theme/))
    if (theme === 'light'){
        element.classList.remove(className)
        element.classList.add(className.replace('dark', 'light'))
    }else if (theme === 'dark'){
        element.classList.remove(className)    
        element.classList.add(className.replace('light', 'dark'))
    }
}

export {themeSwitcher}