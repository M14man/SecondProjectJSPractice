import {getResource} from "../services/requests";


const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
    
    

    // cards.forEach(card => {
    //     card.classList.add('animate__animated', 'animate__fadeInUp');
    // });
    
    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         setTimeout(() => {
    //             card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //             card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //         }, 500);
            
    //         btn.classList.add('animate__animated', 'animate__flipOutY');

    //     });
    // });
    btn.addEventListener('click', (e) => {
        e.target.classList.add('animate__animated', 'animate__flipOutY');
        setTimeout(() => {
            getResource('http://localhost:3000/styles')
                .then(res => creatCards(res))
                .catch(error => console.log(error));
        }, 1000);
        
    });

    function creatCards(response) {
        response.forEach(({src, title, link}) => {
            const card = document.createElement('div');
            card.classList.add('animate__animated', 'animate__fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
            <div class=styles-block>
                 <img src=${src} alt="style">
                 <h4>${title}</h4>
                 <a href=${link}>Подробнее</a>
            </div>
            `;
            document.querySelector(wrapper).append(card);
        });
    }


};



export default showMoreStyles;




