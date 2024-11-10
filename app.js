let ListaDeNumerosSorteados = []

let numeroMaximo = 100;
let tentativas = 1;
let numerosSecreto = gerarNumeroAleatorio();


// let titulo = document.querySelector('h1');
// titulo.innerHTML = `Jogo do número secreto`;

// let paragrafo = document.querySelector('p')
// paragrafo.innerHTML = `Escolha um número entre 1 e ${numeroMaximo}`

//atribuindo parametros (tag, texto)
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 })
}


function exibirTextoInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto')
  exibirTextoNaTela('p', `Escolha um número entre 1 e ${numeroMaximo}`)
}
//executando função / atribuindo valores para o parametros (tag, texto)
exibirTextoInicial()


function verificarChute() {
  let chute = document.getElementById('chute').value;
  document.getElementById('chute').value = ''


  if (chute == numerosSecreto) {

    //operador Ternário
    let palavrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'

    let mensagemTentativas = `Você Descobriu o número secreto <span style="color: rgb(0, 255, 76);">${numerosSecreto}</span> com ${tentativas} ${palavrasTentativas}`

    exibirTextoNaTela('h1', `<span style="color: rgb(0, 255, 76);">Acertou</span>`)
    exibirTextoNaTela('p', mensagemTentativas)
    document.getElementById('reiniciar').removeAttribute('disabled');


  } else {

    if (chute > numerosSecreto) {
      exibirTextoNaTela('h1', `<span style="color: red;">Errou</span>`);
      exibirTextoNaTela('p', `O Numero é menor que: <span style="color: red;">${chute}</span>`);
    } else {
      exibirTextoNaTela('h1', `<span style="color: red;">Errou</span>`);
      exibirTextoNaTela('p', `O Numero é maior que: <span style="color: red;">${chute}</span>`);
    } tentativas++;
    limparCampo()
  }
}

function limparCampo() {
  chute = document.getElementById('chute');
  chute.value = ''
}

function gerarNumeroAleatorio() {

  let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);

  let quantidadeDeElementosnaLista = ListaDeNumerosSorteados.length

  if (quantidadeDeElementosnaLista == numeroMaximo) {
    ListaDeNumerosSorteados = []
  }

  if (ListaDeNumerosSorteados.includes(numeroEscolhido)) {

    return gerarNumeroAleatorio();

  } else {

    ListaDeNumerosSorteados.push(numeroEscolhido);

    console.log(ListaDeNumerosSorteados);

    return numeroEscolhido

  }
}

function reiniciar() {

  numerosSecreto = gerarNumeroAleatorio()
  limparCampo()
  tentativas = 1;
  exibirTextoInicial()
  document.getElementById('reiniciar').setAttribute('disabled', true)
}

