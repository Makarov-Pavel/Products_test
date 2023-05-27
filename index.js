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

let themeSwitcher = document.querySelector('.theme-switcher')
let themeSwitcherText = document.querySelector('.theme-switcher__label')

themeSwitcher.addEventListener('change', (event)=>{
    if(event.target.checked){
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList = 'light'
        themeSwitcherText.innerHTML = 'Тёмная'
    }else{
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList = 'dark'
        themeSwitcherText.innerHTML = 'Светлая'
    }
})

let allCardDate =  Array.from(document.querySelectorAll('.card__date'))

let getDayInfo = function(date){
    let arrayFromDate = date.split('.')
    let correctDate = arrayFromDate[1] + '.' + arrayFromDate[0] + '.' + arrayFromDate[2]
    
    let helpDate = new Date(correctDate)
    let weekday = function(){
        switch (helpDate.getDay()) {
            case 0:
                return 'Воскресенье'
        
            case 1:
                return 'Понедельник'
        
            case 2:
                return 'Вторник'
        
            case 3:
                return 'Среда'
        
            case 4:
                return 'Четверг'
        
            case 5:
                return 'Пятница'
        
            case 6:
                return 'Суббота'
        
            default:
                break;
        }
    }
    let dayNumber = function(){
        if(helpDate.getDate() < 7){
            return '1'
        }else if(helpDate.getDate() > 7 && helpDate.getDate() < 14){
            return '2'
        } else if(helpDate.getDate() > 14 && helpDate.getDate() < 21){
            return '3'
        } else if(helpDate.getDate() > 21 && helpDate.getDate() < 28){
            return '4'
        } else{
            return '5'
        }
    }
    let month = function(){
        switch (helpDate.getMonth()) {
            case 0:
                return 'Января'
        
            case 1:
                return 'Февраля'
        
            case 2:
                return 'Марта'
        
            case 3:
                return 'Апреля'
        
            case 4:
                return 'Мая'
        
            case 5:
                return 'Июня'
        
            case 6:
                return 'Июля'
        
            case 7:
                return 'Августа'
        
            case 8:
                return 'Сентября'
        
            case 9:
                return 'Октября'
        
            case 10:
                return 'Ноября'
        
            case 11:
                return 'Декабря'
        
            default:
                break;
        }
    }
    let year = helpDate.getFullYear()

    return `${weekday()}, ${dayNumber()} неделя ${month()} ${year} года`
}

allCardDate.map(el => el.innerHTML = getDayInfo('26.05.2023'))
