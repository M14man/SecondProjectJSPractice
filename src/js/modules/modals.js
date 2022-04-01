const modals = () => {
    
    let btnPressed = false;

    function bindModal(trigerSelector, modalSelector, closeSelector, destroy = false) {
        
        const triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelectorAll(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();
              
        
        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                }

                btnPressed = true;

                if(destroy){
                    item.remove();
                }

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn'); 
                });
               
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            }); 
        });

        close.forEach(btn => {
            btn.addEventListener('click', () => {
                windows.forEach(item => {
                    item.style.display = 'none';
                     
                });
                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {

                    windows.forEach(item => {
                    item.style.display = 'none'; 
                    });
                    
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                }
            });    
        });
    }

    function showModalByTime (modalSelector, time) {
        setTimeout(() => {
            let display;

            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
                if (!display) { //якщо жодне модальне вікно не показується то ми відкриваємо його
                    document.querySelector(modalSelector).style.display = 'block';
                    document.body.style.overflow = 'hidden';
                    let scroll = calcScroll();
                    document.body.style.marginRight = `${scroll}px`;

                }
            });
            
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    function openByScroll(selector){
        window.addEventListener('scroll', ()=>{
            if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)){
                document.querySelector(selector).click();
            }
        });
    }



    openByScroll('.fixed-gift');
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);

    // showModalByTime('.popup-consultation', 5000);

    
    // window.pageYOffset; // це скільки ми відлистали зверху
    // document.documentElement.clientHeight // це вісота вікна
    // document.documentElement.scrollHeight   // це висота всього контенту 

};

export default modals;