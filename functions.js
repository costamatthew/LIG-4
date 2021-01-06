const body = document.querySelector('body')
const painel = document.getElementById('painel')
const colunas = document.querySelectorAll(".tabuleiro_coluna");

const vertical = ['','','','','','']
const horizontal = [[''],[''],[''],[''],[''],[''],['']]
const diagonal = [[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],['']]
const diagonal2 = [[],[],[],[],[],[],[],[],[],[],[],[]]

const vAux = [[],[],[],[],[],[],[]]
const hAux = [[],[],[],[],[],[],[]]
const d1Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]
const d2Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]

let keep;
let turn = 1;
let c = 8
body.onclick = function(){
    c+=1
}

colunas.forEach(function (colfor) {

    colfor.addEventListener("click", function(e) {

        const collumn = e.currentTarget
        const id = collumn.id
        const limit = e.currentTarget.children.length

        body.onclick(c++)
        
        function Gerardisco(string) {
            let d1 = document.createElement("div");
            d1.setAttribute("id", c);
            d1.style.backgroundColor = string
            d1.style.width = "80%";
            d1.style.height = "10%";
            d1.style.borderRadius = "40%";
            d1.style.padding = "10px";
            d1.style.margin = "10px";

            vertical[id] += string[0]
            horizontal[parseInt(limit)][id] = string[0]
            diagonal[parseInt(id)+parseInt(limit)][id] = string[0]
            diagonal2[6-parseInt(id)+parseInt(limit)][id] = string[0]

            vAux[id].push(d1.id)
            hAux[limit][id] = d1.id
            d1Aux[parseInt(id)+parseInt(limit)][id] = d1.id
            d2Aux[6-parseInt(id)+parseInt(limit)][id] = d1.id

            return d1;
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
                document.getElementById(element).style.background = 'green'
            })
        }
        else if (hJoin.includes('yyyy')) {
            let inicio = hJoin.indexOf('yyyy')
            hAux[limit].forEach(function(element,index){
                if(index>=inicio && index < inicio+4)
                document.getElementById(element).style.background = 'green'
            })
        }
        else if (dJoin.includes('yyyy')) {
            let inicio = dJoin.indexOf('yyyy')
            d1Aux[parseInt(id)+parseInt(limit)].forEach(function(element,index){
                if(index>=inicio && index < inicio+4)
                document.getElementById(element).style.background = 'green'
            }) 
        }
        else if (d2Join.includes('yyyy')) {
            d2Aux[6-parseInt(id)+parseInt(limit)].forEach(function(element,index){
                if(index>=inicio && index < inicio + 4)
                document.getElementById(element).style.background = 'green'
            })
        }
    
        else if(vertical[id].includes('bbbb')) {
            let inicio = vertical[id].indexOf('bbbb')
            vAux[id].forEach(function(element,index){
                if(index>=inicio)
                document.getElementById(element).style.background = 'green'
            })
        }
        else if(hJoin.includes('bbbb')) {
            let inicio = hJoin.indexOf('bbbb')
            hAux[limit].forEach(function(element,index){
                if(index>=inicio && index < inicio+4)
                document.getElementById(element).style.background = 'green'
            })
        }
        else if(dJoin.includes('bbbb')) {
            let inicio = dJoin.indexOf('bbbb')
            d1Aux[parseInt(id)+parseInt(limit)].forEach(function(element,index){
                if(index>=inicio && index < inicio+4)
                document.getElementById(element).style.background = 'green'
            }) 
        }
        else if(d2Join.includes('bbbb')) {
            let inicio = d2Join.indexOf('bbbb')
            d2Aux[6-parseInt(id)+parseInt(limit)].forEach(function(element,index){
                if(index>=inicio && index < inicio+4)
                document.getElementById(element).style.background = 'green'
            })
        }

        let cont = 0
        colunas.forEach( function (element){
            if(element.children.length == 6)
                cont ++
        })
        if(cont == 7)
         body.innerText = 'Empate!!!'

    })
})

function playerTurn(e) {
    if (e === 1) {
        turn = 2;
    } else {
        turn = 1;
    } 
}





