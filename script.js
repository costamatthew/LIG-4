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
    
            if (limit < 6) {
                if (turn === 1) {
                    collumn.appendChild(Gerardisco('yellow',id,limit));
                }
    
                if (turn === 2) {
                    collumn.appendChild(Gerardisco('blue',id,limit));
                }
    
                playerTurn(turn)

                verificaVitoria(limit,id)

                verificaEmpate()
            }
        }
    })
})
