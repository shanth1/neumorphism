const { slidesArr, listenerPages } = require('../slider/slider.js');

const prevBtnClass = 'pagination__btn-prev'
const paginationClass = 'pagination__btn'
const nextBtnClass = 'pagination__btn-next'

//Создание кнопок пагинации
// for (let index = 1; index < slidesArr.length; index++) {
//     let pagPage = document.createElement('div')
//     pagPage.classList.add(paginationClass)
//     pagPage.classList.add('pagination__btn_theme_light')
//     pagPage.innerHTML = index + 1
//     document.querySelector(`.${nextBtnClass}`).before(pagPage)
// }
// document.querySelectorAll(`.${paginationClass}`).forEach((el, index)=>{
//     el.addEventListener('click', {handleEvent: listenerPages, index: index})
// })




// const listenerPages = function(event){
//     let arr = this.arr
//     let item = this.item
//     let index = this.index

//     if(Array.from(event.target.classList).find(el => el.match(/theme/)).endsWith('light')){
//         arr.forEach((el, elIndex)=>{
//             if (elIndex !== index){
//                 arr[elIndex].classList.remove('pagination__btn_status_active_light')
//                 arr[elIndex].classList.add('pagination__btn_theme_light')
//                 arr[index].addEventListener('click', this, {once: true})
//             }
//         })

//         event.target.classList.remove('pagination__btn_theme_light')
//         event.target.classList.add('pagination__btn_status_active_light')
//     }else {
//         event.target.classList.remove('pagination__btn_theme_dark')
//         event.target.classList.add('pagination__btn_status_active_dark')
//     }
    
// }





// const listener = function (event){
//     document.querySelectorAll('.pagination__btn').forEach(item =>{
//         //Регулярное выражение
//         item.classList.remove('pagination__btn_status_active_light')
//         item.classList.remove('pagination__btn_status_active_dark')

//         item.addEventListener('click', listener)

//         if(Array.from(event.target.classList).find(el => el.match(/theme/)).endsWith('light')){
//             item.classList.toggle('pagination__btn_theme_light', true)
//         }else {
//             item.classList.toggle('pagination__btn_theme_dark', true)
//         }
//     })
//     console.log(Array.from(event.target.classList).find(el => el.match(/theme/)))
    
//     if(Array.from(event.target.classList).find(el => el.match(/theme/)).endsWith('light')){
//         event.target.classList.remove('pagination__btn_theme_light')
//         event.target.classList.add('pagination__btn_status_active_light')
//         event.target.removeEventListener('click', listener)
//     }else {
//         event.target.classList.remove('pagination__btn_theme_dark')
//         event.target.classList.add('pagination__btn_status_active_dark')
//         event.target.removeEventListener('click', listener)
//     }
// }

// document.querySelectorAll('.pagination__btn').forEach(item => {
//     item.addEventListener('click', listener)
// })

