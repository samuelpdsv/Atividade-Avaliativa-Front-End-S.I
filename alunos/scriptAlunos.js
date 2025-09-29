
const formulario = document.getElementById("form-contato");
//const nome = document.getElementsByName("nome")
const campos = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".mensagemSpan")
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const mensagemTexto = document.getElementById("input_formulario")

let mensagemEnvio = document.getElementById("mensagemDeEnvio")

formulario.addEventListener('submit',(event) => {
    event.preventDefault()
    validarNome()
    validarEmail()
    validarTexto()
    console.log("teste")

    enviar()
})

function setError(index){
    campos[index].style.border = '2px solid red'
    spans[index].style.display = 'block'
}
function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}

function validarNome(){
    if (campos[0].value.length < 1){
        setError(0)
        console.log("nome invalido")
    } else {
        removeError(0)
        console.log("nome valido")
    }
}

function validarEmail(){
    if (!emailRegex.test(campos[1].value)) {
        setError(1)
        console.log("EMAIL VALIDO")

    } else {
        removeError(1)
        console.log("EMAIL INVALIDO")

    }
}

function validarTexto(){
    if (campos[2].value.length < 10){
        setError(2)
        console.log("texto com poucos caracteres")
    } else {
        removeError(2)
        console.log("texto valido")
    }
}

function enviar(){
    let nomeP = campos[0].value
    mensagemEnvio.textContent = "Obrigado pelo contato, " + nomeP + "!"
}

