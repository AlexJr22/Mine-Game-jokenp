const respComputador = document.getElementById("Rpc")
const respJogador = document.getElementById("Rjg")



function jogar(String){
    const items = (() => {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const choice = ['pedra', 'papel', 'tesoura']
        return choice[random(0, 3)]
    })()
    
    if(String == 'pedra') { // Se o usuário escolher PEDRA
        
        if(items == 'pedra') { // EMPATE
            respComputador.innerHTML = 'O computador escolheu: Pedra'
        }
        if(items == 'papel') { // DERROTA
            respComputador.innerHTML = 'O computador escolheu: Papel'
        }
        if(items == 'tesoura') { // VITORIA
            respComputador.innerHTML = 'O computador escolheu: Tesoura'
        }
        
    }
    if(String == 'papel') { // se o usuário escolher PAPEL
        
        if(items == 'pedra') { // VITORIA
            respComputador.innerHTML = 'O computador escolheu: Pedra' 
        }
        if(items == 'papel') { // EMPATE
            respComputador.innerHTML = 'O computador escolheu: Papel'
        }
        if(items == 'tesoura') { // DERROTA
            respComputador.innerHTML = 'O computador escolheu: Tesoura'
        }
        
    }
    if(String == 'tesoura') { //se o usuário escolher TESOURA
        
        if(items == 'pedra') { // DERROTA
            respComputador.innerHTML = 'O computador escolheu: Pedra'            
        }
        if(items == 'papel') {  // VITORIA
            respComputador.innerHTML = 'O computador escolheu: Papel'
        }
        if(items == 'tesoura') { // EMPATE
            respComputador.innerHTML = 'O computador escolheu: Tesoura'
        }
        
    }
}

