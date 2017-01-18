/**
 * Created by gabriel on 17/01/17.
 */

function atualizaSaudacao() {
    var saudacao = document.getElementById("saudacao");

    if (localStorage.nome) {
        saudacao.innerHTML = "Olá " + localStorage.nome;
    } else {
        saudacao.innerHTML = null;
    }
};

window.onload = function () {
    var btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.onclick = function () {
        var campoNome = document.getElementById("campoNome");
        localStorage.nome = campoNome.value;
        atualizaSaudacao();
    };

    var btnLimpar = document.getElementById("btnLimpar");
    btnLimpar.onclick = function () {
        localStorage.removeItem("nome");
        atualizaSaudacao();
    };

    atualizaSaudacao();
};