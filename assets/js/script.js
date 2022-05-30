function calcular3(){
    const resultado = document.getElementById("resultado")
    const conta = parseFloat(document.getElementById("totalConta").value)

    r = (conta * 0.03).toFixed(2)

    resultado.textContent = `R$: ${r}`
}

function calcular5(){
    const resultado = document.getElementById("resultado")
    const conta = parseFloat(document.getElementById("totalConta").value)

    r = (conta * 0.05).toFixed(2)

    resultado.textContent = `R$: ${r}`
}

function calcular10(){
    const resultado = document.getElementById("resultado")
    const conta = parseFloat(document.getElementById("totalConta").value)

    r = (conta * 0.1).toFixed(2)

    resultado.textContent = `R$: ${r}`
}

function calcular15(){
    const resultado = document.getElementById("resultado")
    const conta = parseFloat(document.getElementById("totalConta").value)

    r = (conta * 0.15).toFixed(2)

    resultado.textContent = `R$: ${r}`
}