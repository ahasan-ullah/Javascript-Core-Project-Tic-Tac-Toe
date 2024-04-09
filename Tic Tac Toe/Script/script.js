let boxes = document.querySelectorAll(".box");
let resetGamebtn = document.querySelector("#reset_game");
let newGame = document.querySelector("#new_game");
let msg = document.querySelector(".msg");
let winner = document.querySelector("#winner");
let tic_tac_toe = document.querySelector(".main_hide");

let turnO = true;
let count = 0;
const winningPatterns = [
	[0,1,2],
	[0,3,6],
	[0,4,8],
	[0,1,2],
	[1,4,7],
	[2,5,8],
	[2,4,6],
	[3,4,5],
	[6,7,8]
	];

const resetGame = ()=>{
	turnO=true;
	enableBoxes();
	msg.classList.add("hide");
	tic_tac_toe.classList.remove("hide");

};

boxes.forEach((box)=>{
	box.addEventListener("click",()=>{
		count++;
		if(turnO){
			box.innerText = "O";
			turnO = false;
		}
		else{
			box.innerText = "X";
			turnO = true;
		}
		box.disabled =true;
		checkWinner(count);
	});
});

const disableBoxes=()=>{
	for(let box of boxes){
		box.disabled=true;
	}
};

const enableBoxes=()=>{
	for(let box of boxes){
		box.disabled=false;
		box.innerText="";
	}
};

const showWinner=(win)=>{
	winner.innerText = 'Congratulation, Winner is '+win;
	msg.classList.remove("hide");
	tic_tac_toe.classList.add("hide");
	disableBoxes();
};

// const draw=(count)=>{
// 	if(count===9){
// 		winner.innerText = 'Draw';
// 		msg.classList.remove("hide");
// 		tic_tac_toe.classList.add("hide");
// 		disableBoxes();
// 	}
// };
const checkWinner = (count) => {
    let winnerFound = false;
    for (let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                winnerFound = true;
                break;
            }
        }
    }
    // if (!winnerFound) {
    //     draw(count);
    // }
};
newGame.addEventListener("click",resetGame);
resetGamebtn.addEventListener("click",resetGame);