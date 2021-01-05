const colunas = document.querySelectorAll(".tabuleiro_coluna");

let keep;
let turn = 1;

colunas.forEach(colfor => {
    colfor.addEventListener("click", (e) => {
        if (turn === 1) {
            let event = e.target.id;
            keep = document.getElementById(event);
            keep.appendChild(disco_1());
            //console.log(keep)
        }

        if (turn === 2) {
            let event = e.target.id;
            keep = document.getElementById(event);
            keep.appendChild(disco_2());
            //console.log(keep)
        }

        playerTurn(turn);
        console.log(turn);
    })
})

const playerTurn = (e) => {
    if (e === 1) {

        turn = 2;
    } else {
        turn = 1;
    } 
}

const disco_1 = () => {
    let d1 = document.createElement("div");
    d1.setAttribute("id", "disco1");
    d1.style.backgroundColor = "#000";
    d1.style.width = "80%";
    d1.style.height = "10%";
    d1.style.borderRadius = "40%";
    d1.style.padding = "10px";
    d1.style.margin = "10px";
    return d1;
}

const disco_2 = () => {
    let d2 = document.createElement("div");
    d2.setAttribute("id", "disco2");
    d2.style.backgroundColor = "#F30303";
    d2.style.width = "80%";
    d2.style.height = "10%";
    d2.style.borderRadius = "40%";
    d2.style.padding = "10px";
    d2.style.margin = "10px";
    return d2;
}



