console.log(window.scrollY)
let arrowUpBtn = document.querySelector('.arrow_up_btn')


function showScrollUpBtn(){
    let offsetY = window.pageYOffset
    let clientHeight = document.documentElement.clientHeight

    if(offsetY > clientHeight){
        arrowUpBtn.style.transform = 'translateY(0px)'
    } else {
        arrowUpBtn.style.transform = 'translateY(150px)'
    }
}

document.addEventListener('scroll', showScrollUpBtn)

function scrollUp(){
    if(window.pageYOffset > 0){
        window.scrollBy(0, -100)
        setTimeout(scrollUp, 0)
    }
}

arrowUpBtn.addEventListener('click', scrollUp)