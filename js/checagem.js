const form = document.forms[0];
let nome = document.getElementById("nome").value.trim();
let email = document.getElementById("email").value.trim();

// Função para limpar valores do formulário

function limpaInput() {
    form.reset();
}

// Função que compara soma, gera um objeto a partir de dados do input, e envia para localStorage

function dados() {
    let meuObj = {
        nome: nome,
        email: email
    }
    let key = getRandomString(6);
    localStorage.setItem(key, JSON.stringify(meuObj));

    alert("Inscrição enviada com sucesso!");
    limpaInput();
}



// Função para gerar valores aleatórios para identificação dos itens no localStorage

function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

// Função para validar formulário

function validar() {

    if (form.nome.value == "") {
        alert("Por favor digite seu nome!");
        document.getElementById("nome").focus();
        return false;
    }
    if (form.email.value == "") {
        alert("Por favor digite seu email!");
        document.getElementById("email").focus();
        return false;
    } dados();
}