const showMoreStyles = (trigger, styles) => {
    const btn = document.querySelector(trigger),
        cards = document.querySelectorAll(styles);
    
    

    cards.forEach(card => {
        card.classList.add('animate__animated', 'animate__fadeInUp');
    });
    
    btn.addEventListener('click', () => {
        cards.forEach(card => {
            setTimeout(() => {
                card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
                card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            }, 500);
            
            btn.classList.add('animate__animated', 'animate__flipOutY');

        }); 
    });


};



export default showMoreStyles;