const filter = () => {
    
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        btnAll = menu.querySelector('.all'),
        btnLovers = menu.querySelector('.lovers'),
        btnChef = menu.querySelector('.chef'),
        btnGirl = menu.querySelector('.girl'),
        btnGuy = menu.querySelector('.guy'),
        btnGrandmother = menu.querySelector('.grandmother'),
        btnGranddad = menu.querySelector('.granddad'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        markGirl = wrapper.querySelectorAll('.girl'),
        markLovers = wrapper.querySelectorAll('.lovers'),
        markChef = wrapper.querySelectorAll('.chef'),
        markGuy = wrapper.querySelectorAll('.guy'),
        no = document.querySelector('.portfolio-no');
    
    
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animate__animated', 'animate__fadeOutUp');   
        });
        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animate__animated', 'animate__fadeInUp'); 
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animate__animated', 'animate__fadeinUp');
        }

    };
    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });
    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });
    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });
    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });
    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });
    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });
    btnGranddad.addEventListener('click', () => {
        typeFilter();
    });

    
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            items.forEach(item => {
            item.classList.remove('active');
        });
            e.target.classList.add('active');
        }); 
    });

    // Ниже код Ивана
    // menu.addEventListener('click', (e) => {
    //     let target = e.target;

    //     if (target && target.tagName == "LI") {
    //         items.forEach(btn => btn.classList.remove('active'));
    //         target.classList.add('active');
    //     }
    // });
};


export default filter;