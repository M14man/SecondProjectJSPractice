const input = () => {


    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const input = document.querySelector('#oneInput');
    console.log(input.files);
    let formData = new FormData();
    input.addEventListener('input', () => {
        if (input.value !== '') {

            formData.append('photo', input.files[0]);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                })
                .catch(() => {
                    console.log('maby the internet isnt working');
                })
                .finally(() => {
                    input.value = '';
                });
       } 
    });

    


};

export default input;