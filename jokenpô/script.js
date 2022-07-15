const respComputador = document.getElementById("Rpc")
const respJogador = document.getElementById("Rjg")
const result = document.getElementById('resp')


function jogar(String){
    const items = (() => {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const choice = ['pedra', 'papel', 'tesoura']
        return choice[random(0, 3)]
    })()
    
    if(String == 'pedra') { // Se o usuário escolher PEDRA
        respJogador.innerHTML = 'O jogador escolheu: Pedra'
        if(items == 'pedra') { // EMPATE
            respComputador.innerHTML = 'O computador escolheu: Pedra'
            result.innerHTML = 'EMPATE'
        }
        if(items == 'papel') { // DERROTA
            respComputador.innerHTML = 'O computador escolheu: Papel'
            result.innerHTML = 'O jogador perdeu!!'
        }
        if(items == 'tesoura') { // VITORIA
            respComputador.innerHTML = 'O computador escolheu: Tesoura'
            result.innerHTML = 'O jogador ganhou!!'
        }
        
    }
    if(String == 'papel') { // se o usuário escolher PAPEL
        respJogador.innerHTML = 'O jogador escolheu: Papel'
        if(items == 'pedra') { // VITORIA
            respComputador.innerHTML = 'O computador escolheu: Pedra' 
            result.innerHTML = 'O jogador ganhou!!'
        }
        if(items == 'papel') { // EMPATE
            respComputador.innerHTML = 'O computador escolheu: Papel'
            result.innerHTML = 'EMPATE'
        }
        if(items == 'tesoura') { // DERROTA
            respComputador.innerHTML = 'O computador escolheu: Tesoura'
            result.innerHTML = 'O jogador perdeu!!'
        }
        
    }
    if(String == 'tesoura') { //se o usuário escolher TESOURA
        respJogador.innerHTML = 'O jogador escolheu: Tesoura'
        if(items == 'pedra') { // DERROTA
            respComputador.innerHTML = 'O computador escolheu: Pedra' 
            result.innerHTML = 'O jogador perdeu!!'           
        }
        if(items == 'papel') {  // VITORIA
            respComputador.innerHTML = 'O computador escolheu: Papel'
            result.innerHTML = 'O jogador ganhou!!'
        }
        if(items == 'tesoura') { // EMPATE
            respComputador.innerHTML = 'O computador escolheu: Tesoura'
            result.innerHTML = 'EMPATE'
        }
        
    }
}

