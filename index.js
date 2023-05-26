let arrowUpBtn = document.querySelector('.arrow-up-btn')


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


let allCardBtn = document.querySelectorAll('.card__btn')
let formPopUp = document.querySelector('.form-wrapper')
let formCloseBtn = document.querySelector('.form__close-btn')
let form = document.querySelector('.form')
allCardBtn.forEach(el => {
    el.addEventListener('click', ()=>{
        formPopUp.style.display = 'block';
        document.body.style.overflow = 'hidden'
    })
})
formCloseBtn.addEventListener('click', ()=>{
    formPopUp.style.display = 'none';
    document.body.style.overflow = 'auto'
})
form.addEventListener('submit', ()=>{
    formPopUp.style.display = 'none';
    document.body.style.overflow = 'auto'
    alert('Покупка совершена')
})