function Gerardisco(string,id,limit) {
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


function verificaVitoria (limit,id) {
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

}

function verificaEmpate() {
    let cont = 0
    colunas.forEach( function (element){
        if(element.children.length == 6)
            cont ++
    })
    if(cont == 7)
    button.onclick()
}



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

button.onclick = function () {
    colunas.forEach(function(element) {
        element.innerHTML = '' 
    })

    vertical = ['','','','','','']
    horizontal = [[],[],[],[],[],[],[]]
    diagonal = [[],[],[],[],[],[],[],[],[],[],[],[]]
    diagonal2 = [[],[],[],[],[],[],[],[],[],[],[],[]]
    
    vAux = [[],[],[],[],[],[],[]]
    hAux = [[],[],[],[],[],[],[]]
    d1Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]
    d2Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]

    result.innerHTML = 'Click para Começar'
    play = false
}
