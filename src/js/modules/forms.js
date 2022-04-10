// import { postData } from "../services/requests";


// const forms = (state) => {


//     const forms = document.querySelectorAll('form'),
//         inputs = document.querySelectorAll('input'),
//         upload = document.querySelectorAll('[name="upload"]');
    
//     const message = {
//         loading: 'Загрузка...',
//         success: "Спасибо. Мы скоро с вами свяжемя",
//         failure: 'Что то пошло не так',
//         spinner: 'assets/img/spinner.gif',
//         ok: 'assets/img/ok.png',
//         fail: 'assets/img/fail.png'
//     };

//     const path = {
//         designer: 'http://localhost:3000/request',
//         question: 'http://localhost:3000/questions'
//     };


//     const clearInputs = ()=>{
//         inputs.forEach(item=>{
//             item.value = '';
//         });
//         upload.forEach(item=>{
//             item.previousElementSibling.textContent = 'Файл не выбран';
//         });
//     };


//     upload.forEach(item=>{
//         item.addEventListener('input', ()=>{
//             console.log(item.files[0]); // тут ми звертаємось до інпута і у нього тепер є властивість files
//             let dots;
//             const arr = item.files[0].name.split('.');
//             // 'dsfdfdskfsd.jpg' => ['dsfdfdskfsd', 'jpg']
//             arr[0].length > 6 ? dots = '...' : dots = '.';
//             const name = arr[0].substring(0, 6) + dots + arr[1];
//             item.previousElementSibling.textContent = name;
//         });
//     });

//     forms.forEach((item, i) => {
//         item.addEventListener('submit', (e) => {
//             e.preventDefault();

//             let statusMessage = document.createElement('div');
//             statusMessage.classList.add('status');
//             // statusMessage.style.textAlign = 'center';
//             item.parentNode.appendChild(statusMessage);
//             item.classList.add('animate__animated', 'animate__fadeOutUp');
//             setTimeout(()=>{
//                 item.style.display = 'none';
//             }, 400);

//             let statusImg = document.createElement('img');
//             statusImg.setAttribute('src', message.spinner);
//             statusImg.classList.add('animate__animated', 'animate__fadeInUp');
//             statusMessage.appendChild(statusImg);

//             let textMessage = document.createElement('div');
//             textMessage.textContent = message.loading;
//             statusMessage.appendChild(textMessage);

//             const formData = new FormData(item);
//             if (item.classList.contains('calc_form')) {
//                 for (let key in state) {
//                     formData.append(key, state[key]);
//                 }
//             }
//             console.log(formData);
//             let api;
//             item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
//             console.log(api);
//             const json = JSON.stringify(Object.fromEntries(formData.entries()));
//             postData(api, json)
//                 .then(res => {
//                     console.log(res);
//                     statusImg.setAttribute('src', message.ok);
//                     textMessage.textContent = message.success;
//                 })
//                 .catch(() => {
//                     statusImg.setAttribute('src', message.fail);
//                     textMessage.textContent = message.failure;
//                 })
//                 .finally(() => {
//                     if (item.classList.contains('calc_form')) {
//                         document.querySelector('#size').value = '';
//                         document.querySelector('#material').value = '';
//                         document.querySelector('#options').value = '0';
//                         document.querySelector('.promocode').value = '';
//                     }
//                     clearInputs();

//                     setTimeout(() => {
//                         statusMessage.remove();
//                         item.style.display = 'block';
//                         item.classList.remove('animate__fadeOutUp');
//                         item.classList.add('animate__fadeInUp');
//                     }, 5000);
//                 });

//         });
        
//     });


// };


// export default forms;
import {postData} from '../services/requests';

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          upload = document.querySelectorAll('[name="upload"]');
    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
        upload.forEach(item => {
            item.previousElementSibling.textContent = "Файл не выбран";
        });
    };

    upload.forEach(item => {
        item.addEventListener('input', () => {
            console.log(item.files[0]);
            let dots;
            const arr = item.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        });
    });

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.parentNode.appendChild(statusMessage);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                item.style.display = 'none';
            }, 400);

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(item);
            let api;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? api = path.designer : api = path.question;
            console.log(api);

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                    }, 5000);
                });
        });
    });
};

export default forms;