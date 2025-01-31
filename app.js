//03. MANIPULANDO TEXTOS
//selecionar algo do HTML
/*let titulo = document.querySelector('h1');

//titulo dentro do HTML
titulo.innerHTML = 'Jogo do número secreto!'; 

let paragrafo = document.querySelector('p'); 

paragrafo.innerHTML = 'Escolha um numero entre 1 e 10:';
*/
let listaDeNumerosSorteados =[];
let numeroLimite = 50; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//04. CRIANDO UMA FUNÇÃO

//evitar repetição de codigo com função 
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    //titulo dentro do HTML
    campo.innerHTML = texto;  
//    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});  

    if('speechSynthesis' in window){
      let utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'pt-BR';
      utterance.rate = 1.2;
      window.speechSynthesis.speak(utterance);
    } else{
      console.log('Web Speech API não suportada neste navegador.');
    }
}
//um trecho de codigo que tem uma ação
//essa função tem a responsabilidade de verificar o chute, essa é a ação 
function verificarChute(){    
let  chute = document.querySelector('input').value;

  //true or false (booleano)
if(chute == numeroSecreto){
  exibirTextoNaTela('h1','Acertou!');
  let palavraTentativa = tentativas > 1 ? `tentativas!`: `tentativa` ;
  let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
  exibirTextoNaTela('p', mensagemTentativas);
  document.getElementById('reiniciar').removeAttribute('disabled');
} else{
  exibirTextoNaTela('h1','Errou!');
  
  chute > numeroSecreto ? exibirTextoNaTela('p','O numero secreto é menor!') : exibirTextoNaTela('p','O numero secreto é maior!');
  limparCampo();
}
tentativas++;
}

function limparCampo(){
 chute = document.querySelector('input').value = '';
}

function mensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do Número Secreto!');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 50:');
}

function novoJogo(){
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
mensagemInicial();

document.getElementById('reiniciar').setAttribute('disabled', true);
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random()*numeroLimite+1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

mensagemInicial();