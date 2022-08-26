const { clockWork } = require('../clockwork/clockwork.js');
const { getDate } = require('../../index.js');
const { clockFace, renderClockfaceWrapElement } = require('../clockface/clockface.js');

renderClockfaceWrapElement()

const clockEl = document.querySelector('.clock')
const clockCaseEl = document.querySelector('.clock__case')
const clockBackEl = document.querySelector('.clock__back')
const mouseHover = document.querySelector('.clock__mouse-hover')
const clockFaceEl = document.querySelector('.clockface')
const serifs = document.querySelectorAll('.clockface__serif')
const clockDayMonthEl = document.querySelector('.clock__day-month')
const clockDayWeekEl = document.querySelector('.clock__day-week')
const clockWorkEl = document.querySelector('.clockwork')


let date = getDate()

clockWork(getDateValues(date), false)
setInterval(()=>{
    let date = getDate()
    let dateValues = getDateValues(date)

    clockWork(dateValues, true)
    clockFace(dateValues)
})


function getDateValues(date){
    return {
        date: date.getDate(),
        day: date.getDay(),

        hrDeg: date.getHours() * 30,
        mnDeg: date.getHours() * 360 + date.getMinutes() * 6,
        scDeg: date.getMinutes() * 360 + date.getSeconds() * 6,

        hrVal: date.getHours(),
        mnVal: date.getMinutes(),
        scVal: date.getSeconds(),
    }
}


mouseHover.addEventListener('mouseover', ()=>{

    console.log(clockEl.clientHeight * 0.3)
    clockEl.setAttribute('style', `transform: scale(105%)`)
    clockWorkEl.setAttribute('style', `transform: scale(90%)`)
    clockDayMonthEl.setAttribute('style', `transform: scale(130%)`)
    clockDayWeekEl.setAttribute('style', `transform: scale(130%)`)
    clockFaceEl.setAttribute('style', `width: ${clockFaceEl.clientWidth+30}px; height: ${clockFaceEl.clientHeight+30}px;`)
    clockCaseEl.setAttribute('style', `width: ${clockCaseEl.clientWidth+30}px; height: ${clockCaseEl.clientHeight+30}px;`)
    clockBackEl.setAttribute('style', `width: ${clockCaseEl.clientWidth+60}px; height: ${clockCaseEl.clientHeight+60}px;`)

    if(Array.from(serifs[0].classList).find(el => el.match(/theme/)).endsWith('light')){
        serifs.forEach((el, index)=>{
            if (index % 5 === 0){
                el.className = 'clockface__serif clockface__serif_3d_large_theme_light'
            }else{
                el.className = 'clockface__serif clockface__serif_3d_small_theme_light'
            }
        })
    }else{
        serifs.forEach((el, index)=>{
            if (index % 5 === 0){
                el.className = 'clockface__serif clockface__serif_3d_large_theme_dark'
            }else{
                el.className = 'clockface__serif clockface__serif_3d_small_theme_dark'
            }
        })
    }
})

mouseHover.addEventListener('mouseout', ()=>{
    clockEl.setAttribute('style', '' )
    clockDayMonthEl.setAttribute('style', '' )
    clockDayWeekEl.setAttribute('style', '' )
    clockWorkEl.setAttribute('style', '' )
    clockFaceEl.setAttribute('style', '' )
    clockCaseEl.setAttribute('style', '' )
    clockBackEl.setAttribute('style', '' )

    if(Array.from(serifs[0].classList).find(el => el.match(/theme/)).endsWith('light')){
        serifs.forEach((el, index)=>{
            if (index % 5 === 0){
                el.className = 'clockface__serif clockface__serif_2d_large_theme_light'
            }else{
                el.className = 'clockface__serif clockface__serif_2d_small_theme_light'
            }
        })
    }else{
        serifs.forEach((el, index)=>{
            if (index % 5 === 0){
                el.className = 'clockface__serif clockface__serif_2d_large_theme_dark'
            }else{
                el.className = 'clockface__serif clockface__serif_2d_small_theme_dark'
            }
        })
    }
})





