"use strict";
let usuario = "";
let senha = "";
const botaoSubmit = document.querySelector("#btnSubmit");
botaoSubmit.addEventListener("click",()=>{
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");

    if(inputUser.value.length > 3 && inputPass.value.length > 3) {
        labelUser.setAttribute("style","color:#00ff00;");
        labelPass.setAttribute("style","color:#00ff00;");
    }else{
        alert("Inválido, usuário ou senha inválido")
        labelUser.setAttribute("style","color:#ff0000;");
        labelPass.setAttribute("style","color:#ff0000;");
    }
});
const botaoCadastrar = document.querySelector("#btnCadastrar")
botaoCadastrar.addEventListener("click",()=>{
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");
    
    if(inputUser.value.length > 3 && inputPass.value.length > 3) {
        alert("Cadastro realizado com sucesso!")
    }else{
        alert("Por favor, atenda os requisitos para se cadastrar")
    }
})

