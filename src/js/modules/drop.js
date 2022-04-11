const drop = () => {
   
    

    const fileInputs = document.querySelectorAll('[name="upload"]');
    console.log(fileInputs);

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefaults, false);
        });
    });

    function preventDefaults(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function highlite(item) {
        item.closest('.file_upload').style.border = '5px solid yellow';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }

    function unhighlite(item) {
        item.closest('.file_upload').style.border = 'none';
        if (item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = '#fff';
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed';
        }
        
    }

    ['dragenter','dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                highlite(input);
            }, false);
        });
    });


    ['dragleave','drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, () => {
                unhighlite(input);
            }, false);
        });
    });

    // fileInputs.forEach(input => {
    //     input.addEventListener('drop', (e) => {
    //         input.files = e.dataTransfer.files;
    //         let dots;
    //         const arr = input.files[0].name.split('.');
    //         // 'dsfdfdskfsd.jpg' => ['dsfdfdskfsd', 'jpg']
    //         arr[0].length > 6 ? dots = '...' : dots = '.';
    //         const name = arr[0].substring(0, 6) + dots + arr[1];
    //         input.previousElementSibling.textContent = name;
    //     });
    // });

        fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });


};


export default drop;