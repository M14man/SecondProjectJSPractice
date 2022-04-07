const pictureSize = (block) => {
    
    const blocks = document.querySelectorAll(block);

    const showPicture = (block) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none'; 
        });

    };

    const hidePicture = (block) => {
        const img = block.querySelector('img');
        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block'; 
        });

    };

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showPicture(block);
        }); 
    });

    blocks.forEach(block => {
        block.addEventListener('mouseout', () => {
            hidePicture(block);
        }); 
    });



};


export default pictureSize;