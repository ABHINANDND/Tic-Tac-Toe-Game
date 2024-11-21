let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset-btn")
let newGame = document.querySelector(".new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
    // PlayerX,PlayerO
let turnO = true;
let count = 0;
let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {



        if (turnO) { // turnO is alredy set has true so noo need to type in the if
            box.innerText = "O"; //PlayerO
            box.style.color = "#003049";
            turnO = false;

        } else { //PlayerX
            box.innerText = "X";
            box.style.color = "#669bbc";
            turnO = true;

        }
        box.disabled = true;
        count++;
        checkWinner();



    })
})

const disabledBoxes = () => { //to disbale boxes after a player is become winner
    for (box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => { //to enable boxes after a player reset the game
    for (box of boxes) {
        box.disabled = false;
        box.innerText = ""

    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner = () => {
    let isWinner = false;
    for (let pattern of winningPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") { //postionval not equal to empty
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                isWinner = true;
            }


        }
    }
    if (!isWinner && count === 9) {
        msg.innerText = `The Game is Draw`
        msgContainer.classList.remove("hide");
        disabledBoxes();
    }
}


newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);