let arrowUpBtn = document.querySelector('.arrow_up_btn')


function showScrollUpBtn(){
    let offsetY = window.pageYOffset
    let clientHeight = document.documentElement.clientHeight

    if(offsetY > clientHeight){
        arrowUpBtn.style.transform = 'translateY(0px)'
        arrowUpBtn.style.visibility = 'visible'
    } else {
        arrowUpBtn.style.transform = 'translateY(150px)'
        arrowUpBtn.style.visibility = 'hidden'
    }
}

document.addEventListener('scroll', showScrollUpBtn)


function scrollUp(){
    if(window.pageYOffset > 0){
        window.scrollBy(0, -50)
        setTimeout(scrollUp, 0)
    }
}

arrowUpBtn.addEventListener('click', scrollUp)


let radioButtons = document.querySelectorAll('.radio-label')
let addBorderForCheckedRadio = function(checkedRadio){
    checkedRadio.style.border = '1px solid #000'
}
radioButtons.forEach(el => el.addEventListener('click', addBorderForCheckedRadio(el)))