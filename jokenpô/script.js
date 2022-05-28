function jogar(n){
    let compt = (function(){
        const random = (min, max) => Math.floor(Math.random() * (max - min) + min)
        const items = ['Pedra', 'Papel', 'Tesoura']
        return items[random(0, items.length)]
    })()
    
}