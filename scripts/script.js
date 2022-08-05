let switchBox = document.querySelectorAll('.switch-box, .switch, .inner');

document.querySelector(".left-click-trigger").addEventListener('click', ()=>{
    document.querySelector("body").classList.add("off");
    for (let elements of switchBox ){
        elements.classList.add("off")
    }
});

document.querySelector(".right-click-trigger").addEventListener('click', ()=>{
    document.querySelector("body").classList.remove("off");
    for (let elements of switchBox ){
        elements.classList.remove("off")
    }
});