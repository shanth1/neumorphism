const paginationBox = document.querySelector('.pagination__box')



// const listenerPages = function(event){
//     let arr = this.arr
//     let item = this.item
//     let index = this.index
    
//     console.log('hi')

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

// const listenerNext = function(){

// }

// document.querySelectorAll('.pagination__btn').forEach((item, index, arr)=>{
//     if (index === 0){
//         item.addEventListener('click', listenerPrev)
//     }else if (index === arr.length - 1){
//         item.addEventListener('click', listenerNext)
//     }else{
//         item.addEventListener('click', {handleEvent: listenerPages, arr: arr, item: item, index: index}, {once: true})
//     }
// })


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

