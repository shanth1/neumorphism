const hour = document.querySelector('.clockwork__hour');
const minute = document.querySelector('.clockwork__minute');
const second = document.querySelector('.clockwork__second');

// const transition = 'transition: 0.5s cubic-bezier(0.9, 0, 0, 1);'

function clockWork(dateValues, transition){
    if (transition){
        transition = 'transition: 0.3s'
    }else{
        transition = ''
    }
    hour.style.cssText = `transform: rotate(${(dateValues.hrDeg)+(dateValues.mnVal/2)}deg); ${transition}`;
    minute.style.cssText = `transform: rotate(${dateValues.mnDeg + dateValues.scVal/10}deg); ${transition}`;
    second.style.cssText = `transform: rotate(${dateValues.scDeg}deg);  ${transition}`;
}

export {clockWork}