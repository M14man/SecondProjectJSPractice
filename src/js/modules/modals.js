const modals = () => {
    

    function bindModal(trigerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        
        const triger = document.querySelectorAll(trigerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelectorAll(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll();
              
        
        triger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                windows.forEach(item => {
                    item.style.display = 'none'; 
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
                if (e.target === modal && closeClickOverlay) {

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
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');

    showModalByTime('.popup-consultation', 5000);
    

    

};

export default modals;