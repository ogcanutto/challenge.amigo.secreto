// Array para armazenar os nomes adicionados
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    // Captura o valor do input
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validações
    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    // Adiciona ao array
    amigos.push(nome);

    // Atualiza lista na tela
    atualizarLista();

    // Limpa o campo
    input.value = "";
    input.focus();
}

// Função para atualizar lista de nomes na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function (amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Escolhe índice aleatório
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];

    // Mostra resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${sorteado}</strong></li>`;

    // Limpa lista de nomes
    amigos = [];
    atualizarLista();
}
