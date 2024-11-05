var inputTamanho = document.querySelector('[name=tamanho]')
var outputTamanho = document.querySelector('[name=valortamanho]')

function mostrarTamanho(){
    outputTamanho.value = inputTamanho.value
}

inputTamanho.oninput = mostrarTamanho