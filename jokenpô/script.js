const respComputador = document.getElementById("Rpc")


function jogar(String){
    const items = (() => {
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const choice = ['pedra', 'papel', 'tesoura']
        return choice[random(0, 3)]
    })()
    
    if(String == 'pedra') { // Se o usuário escolher PEDRA
        
        if(items == 'pedra') { // EMPATE
            // console.log('pedra')
            
        }
        if(items == 'papel') { // DERROTA
            console.log('papel')
        }
        if(items == 'tesoura') { // VITORIA
            console.log('tesoura')
        }

    }
    if(String == 'papel') { // se o usuário escolher PAPEL

        if(items == 'pedra') { // VITORIA
            console.log('pedra')
        }
        if(items == 'papel') { // EMPATE
            console.log('papel')
        }
        if(items == 'tesoura') { // DERROTA
            console.log('tesoura')
        }
        
    }
    if(String == 'tesoura') { //se o usuário escolher TESOURA
        
        if(items == 'pedra') { // DERROTA
            console.log('pedra')
        }
        if(items == 'papel') {  // VITORIA
            console.log('papel')
        }
        if(items == 'tesoura') { // EMPATE
            console.log('tesoura')
        }
        
    }
}

