const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animate__animated', 'animate__fadeIn');
            upElem.classList.remove('animate__fadeOut');
        } else {
            upElem.classList.add('animate__fadeOut');
            upElem.classList.remove('animate__fadeIn');
       }
    });


    const element = document.documentElement,
        body = document.body;
    
    const calcScroll = () => {
        upElem.addEventListener('click', function (event) {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop); // тут ми просто визначаэмо скыльки ми пролистали зверху
            // console.log(scrollTop);

            if (this.hash !== '') {
                event.preventDefault();
                // let hashElement = document.getElementById(this.hash.substring(1));
                let hashElement = document.querySelector(this.hash), // це ідентичний селектор тому що зверху
                    hashElementTop = 0;
                // console.log(hashElement);

                console.log(hashElement.offsetTop);

                while (hashElement.offsetParent) {
                    hashElementTop += hashElement.offsetTop;
                    hashElement = hashElement.offsetParent;
                }

                hashElementTop = Math.round(hashElementTop);
                smoothScroll(scrollTop, hashElementTop, this.hash);
            }
        });
    };
    
    const smoothScroll = (from, to, hash) => {
        let timeInterval = 1,
            prevScrollTop,
            speed;
        
        if (to > from) {
            speed = 30;
        } else {
            speed = -30;
        }

        let move = setInterval(function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (
                prevScrollTop === scrollTop ||
                (to > from && scrollTop <= to) ||
                (to < from && scrollTop <= to)
            ) {
                clearInterval(move);
                history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
                
            } else {
                body.scrollTop += speed;
                element.scrollTop += speed;
                prevScrollTop = scrollTop;
            }
        }, timeInterval);

    };
    calcScroll();

};



export default scrolling;


