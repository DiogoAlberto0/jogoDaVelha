let player = 'x'

const inicialTable = [
    '0', '1', '2',
    '3', '4', '5',
    '6', '7', '8'
]
let table = [...inicialTable]

const winMessage = document.getElementById('win-message')


const thisPlayerWin = (player) => {
    // linhas
    if (table[0] == `${player}` && table[1] == `${player}` && table[2] == `${player}`) return true
    if (table[3] == `${player}` && table[4] == `${player}` && table[5] == `${player}`) return true
    if (table[6] == `${player}` && table[7] == `${player}` && table[8] == `${player}`) return true
    
    //colunas
    if (table[0] == `${player}` && table[3] == `${player}` && table[6] == `${player}`) return true
    if (table[1] == `${player}` && table[4] == `${player}` && table[7] == `${player}`) return true
    if (table[2] == `${player}` && table[5] == `${player}` && table[8] == `${player}`) return true
    
    //diagonais
    
    if (table[0] == `${player}` && table[4] == `${player}` && table[8] == `${player}`) return true
    if (table[2] == `${player}` && table[4] == `${player}` && table[6] == `${player}`) return true
    
    else return false
}

const sendWinMessageIfWinner = () => {
    const winX = thisPlayerWin('x')
    const winO = thisPlayerWin('o')
    
    
    if (winX) {
        winMessage.innerHTML = 'Congratulations player X win!!!'
        winMessage.classList.remove('inactive')
    }
    if (winO) {
        winMessage.innerHTML = 'Congratulations player O win!!!'
        winMessage.classList.remove('inactive')
    }
    
}
const setBrandAccordingPlayrer = (id) => {
    const square = document.getElementById(id)
    
    if (player == 'x') {
        square.classList.add('x')
        table[id] = 'x'
        player = 'o'
    } else {
        square.classList.add('o')
        table[id] = 'o'
        player = 'x'
    }
    
    sendWinMessageIfWinner()
    
}

const resetGame = () => {
    player = 'x'
    table = [...inicialTable]

    for (squareId = 0; squareId < inicialTable.length; squareId++) {
        const square = document.getElementById(squareId)
        square.classList.remove('x', 'o')
    }

    winMessage.classList.add('inactive')
}