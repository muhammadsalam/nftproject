const gridItems = document.querySelectorAll('.process-parent__item');

window.addEventListener('scroll', function () {
    const sticky = document.querySelector('.process-parent'),
        scroll = window.pageYOffset - sticky.offsetTop,
        height = sticky.scrollHeight;
        
    let i = 0;

    scroll < (1 * (height / 6)) ? i = 0 :
    scroll < (2 * (height / 6)) ? i = 1 :
    scroll < (3 * (height / 6)) ? i = 2 :
    scroll < (4 * (height / 6)) ? i = 3 :
    scroll < (5 * (height / 6)) ? i = 4 : i = 5;

    for (let j = 0; j < gridItems.length; j++){
        gridItems[j].classList.remove('view');
        gridItems[j].classList.remove('active');
        if (j <= i) {
            gridItems[j].classList.add('view');
        }
    }
    gridItems[i].classList.add('active')
});

function reScroll(num, e){
    const sticky = document.querySelector('.process-parent'),
        scroll = window.pageYOffset + sticky.offsetTop,
        height = sticky.scrollHeight,
        targ = e.target;
        
    window.scrollTo(0, sticky.offsetTop + (num * (height / 6) - (height / 6 / 2)))    
}