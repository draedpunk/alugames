function alterarStatus(id) {
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagem = jogoSelecionado.querySelector('.dashboard__item__img'); // . para identificar que é uma CLASS
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        // O botão está no estado "Devolver", pedir confirmação para devolver
        let confirmacao = prompt('Você deseja devolver o jogo? (Sim/Não) ');
        if (confirmacao == 'Sim' || confirmacao == 'SIM' || confirmacao == 'sim') {
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
        }
    } else {
        // O botão está no estado "Alugar", mudar para "Devolver" sem confirmação
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
}

function quantidadeJogosAlugados() {
    let jogos = document.querySelectorAll('.dashboard__items__item');
    let contador = 0;

    jogos.forEach(jogo => {
        let imagem = jogo.querySelector('.dashboard__item__img');
        if (imagem.classList.contains('dashboard__item__img--rented')) {
            contador++;
        }
    });

    console.log(`Total de jogos alugados: ${contador}`);
}
// Atualizar a contagem de jogos alugados
quantidadeJogosAlugados();

//Projeto finalizado!!!

