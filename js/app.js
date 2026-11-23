function comprar() {
    let ingressoSelecionado = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    let estoquePista = document.getElementById('qtd-pista');
    let estoqueInferior = document.getElementById('qtd-inferior');
    let estoqueSuperior = document.getElementById('qtd-superior');
    console.log(ingressoSelecionado);
    console.log(quantidade);

    if (quantidade <= 0){
        alert('A quantidade inserida é invalida');
        return;
    }

    if (ingressoSelecionado == 'pista') {
        if (quantidade > estoquePista.innerHTML) {
            alert('A quantidade solicitada para Pista está indisponivel');
        } else {
            estoquePista.innerHTML = estoquePista.innerHTML - quantidade;
            alert('Compra realizada com sucesso');
        }

    } if (ingressoSelecionado == 'inferior') {
        if (quantidade > estoqueInferior.innerHTML) {
            alert('A quantidade solicitada para Cadeira Inferior está indisponivel');
        } else {
            estoqueInferior.innerHTML = estoqueInferior.innerHTML - quantidade;
            alert('Compra realizada com sucesso');
        }
    } if (ingressoSelecionado == 'superior') {
        if (quantidade > estoqueSuperior.innerHTML) {
            alert('A quantidade solicitada para Cadeira Superior está indisponivel');
        } else {
        estoqueSuperior.innerHTML = estoqueSuperior.innerHTML - quantidade;
            alert('Compra realizada com sucesso');
        }
    }
}