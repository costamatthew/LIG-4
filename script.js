const body = document.querySelector('body')
const painel = document.getElementById('painel')
const colunas = document.querySelectorAll(".tabuleiro_coluna");
const result = document.getElementById("result-mensagem");
const button = document.getElementById('div_restet')

let vertical = ['','','','','','']
let horizontal = [[],[],[],[],[],[],[]]
let diagonal = [[],[],[],[],[],[],[],[],[],[],[],[]]
let diagonal2 = [[],[],[],[],[],[],[],[],[],[],[],[]]

let vAux = [[],[],[],[],[],[],[]]
let hAux = [[],[],[],[],[],[],[]]
let d1Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]
let d2Aux = [[],[],[],[],[],[],[],[],[],[],[],[]]

let keep;
let turn = 1;
let c = 8;
let win = "";
let play = false;

body.onclick = function(){
    c+=1
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
