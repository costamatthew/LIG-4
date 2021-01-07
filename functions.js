function verificaVitoria () {
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