/*--------------Модальное окно-------------------*/

const modal = document.querySelector('.consultation__popup');
const consultationPopupBtn = modal.querySelector('.consultation__popup-btn');
const popupButton = modal.querySelector('.consultation__popup-button');
const consultationButton = document.querySelector('.consultation__button');
const body = document.querySelector('body');

//ф-ия открытия модального окна:
const openModal = () => {
    setTimeout(() => {
        modal.classList.remove('popup-exit');
        modal.classList.add('popup-enter');
        body.classList.add('overflow');

    }, 100);
}

//ф-ия закрытия модального окна:
const closeModal = () => {
	 setTimeout(() => {
    modal.classList.remove('popup-enter');
    modal.classList.add('popup-exit');
     body.classList.remove('overflow');
      }, 100);
}
//Открытие:
consultationButton.addEventListener('click', () => {
    openModal();
});


/*--закрытие--*/
consultationPopupBtn.addEventListener('click', (e) =>  {
e.preventDefault();	
	closeModal();
});


popupButton.addEventListener('click', (e) => {
  
    closeModal();
});
/*---------------------------------*/
/*---------цифры-----------*/
const advantages = document.querySelector('.advantages');

const time = 4000;
const step = 100;


function outNum(num, elem){
    
    let l = document.querySelector('.' + elem);
    let n = 0; 
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if (n == num){
            clearInterval(interval);
        }
        l.innerHTML = n;
    },
t);
}
/*-----------анимация квадрата---------*/
const cube = document.querySelectorAll('.rect');
let cubeAnimation = () => {
let windowCenter = window.scrollY + 300;
let scrolloffset = advantages.offsetTop;

        if(advantages.classList.contains("_active") && advantages.classList.contains("_start") ){
            outNum(1000, 'number1');
             outNum(500, 'number2');
             outNum(400, 'number3'); 
             advantages.classList.remove('_start');
           cube.forEach(el => {
          
                el.classList.add('animation-class');
                
           }); 

        } 
        
}


cubeAnimation();
window.addEventListener('scroll',() => {
    cubeAnimation();

});