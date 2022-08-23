const paginationBox = document.querySelector('.pagination__box')

const listener = function (event){
    document.querySelectorAll('.pagination__btn').forEach(item =>{
        //Регулярное выражение
        item.classList.remove('pagination__btn_status_active_light')
        item.classList.remove('pagination__btn_status_active_dark')

        item.addEventListener('click', listener)

        if(Array.from(event.target.classList).find(el => el.match(/theme/)).endsWith('light')){
            item.classList.toggle('pagination__btn_theme_light', true)
        }else {
            item.classList.toggle('pagination__btn_theme_dark', true)
        }
    })
    console.log(Array.from(event.target.classList).find(el => el.match(/theme/)))
    
    if(Array.from(event.target.classList).find(el => el.match(/theme/)).endsWith('light')){
        event.target.classList.remove('pagination__btn_theme_light')
        event.target.classList.add('pagination__btn_status_active_light')
        event.target.removeEventListener('click', listener)
    }else {
        event.target.classList.remove('pagination__btn_theme_dark')
        event.target.classList.add('pagination__btn_status_active_dark')
        event.target.removeEventListener('click', listener)
    }
}

document.querySelectorAll('.pagination__btn').forEach(item => {
    item.addEventListener('click', listener)
})

