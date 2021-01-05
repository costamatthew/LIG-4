const body = document.querySelector('body')
const painel = document.getElementById('painel')
const colunas = document.querySelectorAll(".tabuleiro_coluna");

const vertical = ['','','','','','']
const horizontal = [[''],[''],[''],[''],[''],[''],['']]
const diagonal = [[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],['']]
const diagonal2 = [[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],[''],['']]

let keep;
let turn = 1;

colunas.forEach(function (colfor) {

    colfor.addEventListener("click", function(e) {

        const collumn = e.currentTarget
        const id = collumn.id
        const limit = e.currentTarget.children.length
        
        function Gerardisco(string) {
            let d1 = document.createElement("div");
            d1.setAttribute("id", string);
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

        //condição de vitória

        let hJoin = horizontal[limit].join('')
        let dJoin = diagonal[parseInt(id)+parseInt(limit)].join('')
        let d2Join = diagonal2[6-parseInt(id)+parseInt(limit)].join('')

        if (vertical[id].includes('yyyy') || hJoin.includes('yyyy') || dJoin.includes('yyyy') || d2Join.includes('yyyy')) {
            body.innerText = 'COR AMARELA VENCEU!!!'
            win()
        }
    
        else if(vertical[id].includes('bbbb') || hJoin.includes('bbbb') || dJoin.includes('bbbb') || d2Join.includes('bbbb')) {
            body.innerText = 'COR AZUL VENCEU!!!'
            win()
        }
    })
})

function playerTurn(e) {
    if (e === 1) {
        turn = 2;
    } else {
        turn = 1;
    } 
}





