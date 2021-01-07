const body = document.querySelector('body')
const painel = document.getElementById('painel')
const colunas = document.querySelectorAll(".tabuleiro_coluna");
const result = document.getElementById("result-mensagem");
const button = document.getElementById('div_restet')

const vertical = ['','','','','','']
const horizontal = [[],[],[],[],[],[],[]]
const diagonal = [[],[],[],[],[],[],[],[],[],[],[],[]]
const diagonal2 = [[],[],[],[],[],[],[],[],[],[],[],[]]

const vAux = [[],[],[],[],[],[],[]]
const hAux = [[],[],[],[],[],[],[]]
const d1Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]
const d2Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]

let keep;
let turn = 1;
let c = 8;
let win = "";
let play = false;

body.onclick = function(){
    c+=1
}
button.onclick = function () {
    colunas.forEach(function(element) {
        element.innerHTML = ''
    })
}

colunas.forEach(function (colfor) {

    colfor.addEventListener("click", function(e) {

        if (play === false) {
            const collumn = e.currentTarget
            const id = collumn.id
            const limit = e.currentTarget.children.length
    
            body.onclick(c++)
            
            function Gerardisco(string) {
                let disco = document.createElement("div");
                disco.setAttribute("id", c);
                disco.setAttribute("class", string);
                disco.innerHTML = "0101011001010101001010101010101";
    
                vertical[id] += string[0]
                horizontal[parseInt(limit)][id] = string[0]
                diagonal[parseInt(id)+parseInt(limit)][id] = string[0]
                diagonal2[6-parseInt(id)+parseInt(limit)][id] = string[0]
    
                vAux[id].push(disco.id)
                hAux[limit][id] = disco.id
                d1Aux[parseInt(id)+parseInt(limit)][id] = disco.id
                d2Aux[6-parseInt(id)+parseInt(limit)][id] = disco.id
    
                return disco;
            }
    
            if (limit < 6) {
                if (turn === 1) {
                    collumn.appendChild(Gerardisco('yellow'));
                }
    
                if (turn === 2) {
                    collumn.appendChild(Gerardisco('blue'));
                }
    
                playerTurn(turn)
            }
    
            function array (arr){
                let aux = [] 
                for(let i = 0; i < arr.length; i++) {
                    if (arr[i] == undefined){
                        aux.push('x')
                    }
                    else
                        aux.push(arr[i])
                }
                return aux
            }
    
    
            let hJoin = array(horizontal[limit]).join('')
            let dJoin = array(diagonal[parseInt(id)+parseInt(limit)]).join('')
            let d2Join = array(diagonal2[6-parseInt(id)+parseInt(limit)]).join('')
    
            if (vertical[id].includes('yyyy')) {
                let inicio = vertical[id].indexOf('yyyy')
                vAux[id].forEach(function(element,index){
                    if(index>=inicio)
                    discoWin (element)
                    winText(win)
                    play = true
                })
            }
            else if (hJoin.includes('yyyy')) {
                console.log(hJoin)
                console.log(hAux[limit])
                let inicio = hJoin.indexOf('yyyy')
                hAux[limit].forEach(function(element,index){
                    if(index>=inicio && index < inicio + 4)
                    discoWin (element)
                    winText(win)
                    play = true
                })
            }
            else if (dJoin.includes('yyyy')) {
                let inicio = dJoin.indexOf('yyyy')
                d1Aux[parseInt(id)+parseInt(limit)].forEach(function(element,index){
                    if(index>=inicio && index < inicio+4)
                    discoWin (element)
                    winText(win)
                    play = true
                }) 
            }
            else if (d2Join.includes('yyyy')) {
                let inicio = d2Join.indexOf('yyyy')
                d2Aux[6-parseInt(id)+parseInt(limit)].forEach(function(element,index){
                    if(index>=inicio && index < inicio + 4)
                    discoWin (element)
                    winText(win)
                    play = true
                })
            }
        
            else if(vertical[id].includes('bbbb')) {
                let inicio = vertical[id].indexOf('bbbb')
                vAux[id].forEach(function(element,index){
                    if(index>=inicio)
                    discoWin (element)
                    winText(win)
                    play = true
                })
            }
            else if(hJoin.includes('bbbb')) {
                let inicio = hJoin.indexOf('bbbb')
                hAux[limit].forEach(function(element,index){
                    if(index>=inicio && index < inicio+4)
                    discoWin (element)
                    winText(win)
                    play = true
                })
            }
            else if(dJoin.includes('bbbb')) {
                let inicio = dJoin.indexOf('bbbb')
                d1Aux[parseInt(id)+parseInt(limit)].forEach(function(element,index){
                    if(index>=inicio && index < inicio+4)
                    discoWin (element)
                    winText(win)
                    play = true
                }) 
            }
            else if(d2Join.includes('bbbb')) {
                let inicio = d2Join.indexOf('bbbb')
                d2Aux[6-parseInt(id)+parseInt(limit)].forEach(function(element,index){
                    if(index>=inicio && index < inicio+4)
                    discoWin (element)
                    winText(win)
                    play = true
                })
            }
    
            let cont = 0
            colunas.forEach( function (element){
                if(element.children.length == 6)
                    cont ++
            })
            if(cont == 7)
             result.innerHTML = 'Empate!!!'
    
        }
    })
})

function playerTurn(e) {
    if (e === 1) {
        result.innerHTML = "Player 2"
        win = "Player 1, Ganhou!"
        turn = 2;
    } else {
        result.innerHTML = "Player 1"
        win = "Player 2, Ganhou!"
        turn = 1;
    } 
}

function discoWin (element) {
    let input = document.getElementById(element);
    input.setAttribute("class", "input")
    input.innerHTML = "0101011001010101001010101010101"
    return input
}

function winText (element) {
    result.innerHTML = `${element}`
}

