const accordion = (triggersSelector) => {


    const btns = document.querySelectorAll(triggersSelector);

    
    function unactiveteTriggers() {
        btns.forEach(btn => {
                btn.classList.remove('active-style');
                btn.nextElementSibling.classList.remove('active-content');
                btn.nextElementSibling.style.maxHeight = '0px';
            });
    }


    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            if (!this.classList.contains('active-style')) {
                unactiveteTriggers();
                this.classList.add('active-style');
                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            } else {
                unactiveteTriggers();
                this.nextElementSibling.style.maxHeight = '0px';
            }
        }); 
    });









    // _______________________________________________________________________
    //                      Код із зміною стилів

    //     const btns = document.querySelectorAll(triggersSelector),
    //     blocks = document.querySelectorAll(itemsSelector);


    //     blocks.forEach(block => {
    //         block.classList.add('animate__animated', 'animate__fadeInDown');
    //     });

    //     btns.forEach(btn => {
    //         btn.addEventListener('click', function () {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }); 
    //     });

    // _______________________________________________________________________





    //                            Мій код

    // const accordionSpans = document.querySelectorAll('.accordion-heading span');
    // const accordionBlocks = document.querySelectorAll('.accordion-block');
    // console.log(accordionSpans);




    // accordionBlocks.forEach(block => {
    //     block.style.display = 'none';
    //     block.classList.add('animate__animated', 'animate__fadeInDown');
    // });


    
    // function clearActive() {
    //         accordionBlocks.forEach(block => {
    //         block.style.display = 'none';
    //         });
    //         accordionSpans.forEach(span => {
    //             span.classList.remove('active');
    //         });
    // }


    // accordionSpans.forEach(span => {
    //     span.addEventListener('click', function () {

    //         if (!this.classList.contains('active')) {
    //             clearActive();
    //             this.parentElement.nextElementSibling.style.display = 'block';
    //             this.classList.add('active');
                
    //         } else {
    //             clearActive();
    //             this.parentElement.nextElementSibling.style.display = 'none';
    //             this.classList.remove('active');

    //         }
    //     }); 
    // });






};


export default accordion;