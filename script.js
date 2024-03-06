document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const tabela = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];

    let novaLinha = tabela.insertRow();
    let colunaNome = novaLinha.insertCell(0);
    let colunaTelefone = novaLinha.insertCell(1);
    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
})