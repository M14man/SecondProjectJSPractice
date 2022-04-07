const calc = (size, material, options, promocode, result, state) => {
    
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result);
    
    
    let sum = 0;


    const calcFun = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
        } else if (promocodeBlock.value == 'IWANTPOPART') {

            state.promocode = true;
            
        } else {
            resultBlock.textContent = sum;
            resultBlock.textContent = Math.round(sum * 0.7);
            state.size = sizeBlock.value;
            state.material = materialBlock.value;
            state.option = optionsBlock.value;
        }
        state.sum = sum;
        console.log(state);
    };


    sizeBlock.addEventListener('change', calcFun);
    materialBlock.addEventListener('change', calcFun);
    optionsBlock.addEventListener('change', calcFun);
    promocodeBlock.addEventListener('input', calcFun);

    


};


export default calc;