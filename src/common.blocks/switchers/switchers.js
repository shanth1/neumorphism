let switchUpper = document.querySelector('.switchers__switch-box_z_upper');
let switchBottom = document.querySelector('.switchers__switch-box_z_bottom');

let switchInner = document.querySelectorAll('.switchers__inner_z_bottom, .switchers__inner_z_upper');
let icons = document.querySelector('.switchers__icons');
let iconOn = document.querySelector('.switchers__icon-on');
let iconOff = document.querySelector('.switchers__icon-off');

// Добавить обработчики ошибок на селектор
let switchers = {

    leftTrigger: document.querySelector(".switchers__trigger").addEventListener('click', ()=>{

        switchUpper.classList.remove("switchers__switch-box_theme_light");
        switchUpper.classList.add("switchers__switch-box_theme_dark")
    
        switchBottom.classList.remove("switchers__switch-box_theme_dark")
        switchBottom.classList.add("switchers__switch-box_theme_light")
    
        for (let inner of switchInner) {
            inner.classList.remove('switchers__inner_position_right');
        }
    
        icons.classList.remove('switchers__icons_position_right');
    
        iconOn.className = 'switchers__icon-on switchers__icon-on_no-power';
        iconOff.className = 'switchers__icon-off switchers__icon-off_power';
    }),
    rightTrigger: document.querySelector(".switchers__trigger.switchers__trigger_right").addEventListener('click', ()=>{
        switchUpper.classList.remove("switchers__switch-box_theme_dark");
        switchUpper.classList.add("switchers__switch-box_theme_light");
    
        switchBottom.classList.remove("switchers__switch-box_theme_light");
        switchBottom.classList.add("switchers__switch-box_theme_dark");
    
        for (let inner of switchInner) {
            inner.classList.add('switchers__inner_position_right');
        }
    
        icons.classList.add('switchers__icons_position_right');
    
        iconOn.className = 'switchers__icon-on switchers__icon-on_power';
        iconOff.className = 'switchers__icon-off switchers__icon-off_no-power';
    })
}

export {switchers};



