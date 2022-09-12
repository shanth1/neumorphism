const switchUpper = document.querySelector('.switchers__switch-box_z_upper');
const switchBottom = document.querySelector('.switchers__switch-box_z_bottom');

const switchInner = document.querySelectorAll('.switchers__inner_z_bottom, .switchers__inner_z_upper');
const icons = document.querySelector('.switchers__icons');
const iconOn = document.querySelector('.switchers__icon-on');
const iconOff = document.querySelector('.switchers__icon-off');

const { themeSwitcher, statusSwitcher } = require('../../index.js');

const clockCase = document.querySelector('.clock__case');
const generator = document.querySelector('.generator');
const header = document.querySelector('.header');
const content = document.querySelector('.content');
const slide = document.querySelectorAll('.slider__slide');
const pagination = document.querySelector('.pagination');
const paginationBtn = document.querySelectorAll('.pagination__btn');
const paginationBtnPrev = document.querySelector('.pagination__btn-prev');
const paginationBtnNext = document.querySelector('.pagination__btn-next');
const lightsBox = document.querySelector('.lights-box');
const serifs = document.querySelectorAll('.clockface__serif');
const footer = document.querySelector('.footer');

const socialLinksBtn = document.querySelectorAll('.social-links__btn');
const socialLinksLink = document.querySelectorAll('.social-links__link');


//ТЕст лампочек
// const lightTest = document.querySelector('.light');
// const glassTest = document.querySelector('.light__glass')
const lightTheme = document.querySelector('.light_theme_light')



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

        
        themeSwitcher(clockCase, 'dark')
        themeSwitcher(header, 'dark')
        themeSwitcher(content, 'dark')
        themeSwitcher(pagination, 'dark')
        themeSwitcher(paginationBtnPrev, 'dark')
        themeSwitcher(paginationBtnNext, 'dark')
        themeSwitcher(generator, 'dark')
        themeSwitcher(footer, 'dark')
        themeSwitcher(lightsBox, 'dark')
        slide.forEach(element => {
            themeSwitcher(element, 'dark')
        });
        serifs.forEach(element => {
            themeSwitcher(element, 'dark')
        });
        paginationBtn.forEach(element => {
            themeSwitcher(element, 'dark')
        });
        socialLinksBtn.forEach(element => {
            themeSwitcher(element, 'dark')
        });
        socialLinksLink.forEach(element => {
            themeSwitcher(element, 'dark')
        });
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

        
        themeSwitcher(clockCase, 'light')
        themeSwitcher(header, 'light')
        themeSwitcher(content, 'light')
        themeSwitcher(pagination, 'light')
        themeSwitcher(paginationBtnPrev, 'light')
        themeSwitcher(paginationBtnNext, 'light')
        themeSwitcher(generator, 'light')
        themeSwitcher(footer, 'light')
        themeSwitcher(lightsBox, 'light')
        slide.forEach(element => {
            themeSwitcher(element, 'light')
        });
        serifs.forEach(element => {
            themeSwitcher(element, 'light')
        });
        paginationBtn.forEach(element => {
            themeSwitcher(element, 'light')
        });
        socialLinksBtn.forEach(element => {
            themeSwitcher(element, 'light')
        });
        socialLinksLink.forEach(element => {
            themeSwitcher(element, 'light')
        });
    })
}

export {switchers};