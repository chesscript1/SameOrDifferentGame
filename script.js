const board1=['a1','a2','a3','a4','a5','a6','a7','a8',
'b1','b2','b3','b4','b5','b6','b7','b8',
'c1','c2','c3','c4','c5','c6','c7','c8',
'd1','d2','d3','d4','d5','d6','d7','d8',
'e1','e2','e3','e4','e5','e6','e7','e8',
'f1','f2','f3','f4','f5','f6','f7','f8',
'g1','g2','g3','g4','g5','g6','g7','g8',
'h1','h2','h3','h4','h5','h6','h7','h8'
];

const board2=['a1','a2','a3','a4','a5','a6','a7','a8',
'b1','b2','b3','b4','b5','b6','b7','b8',
'c1','c2','c3','c4','c5','c6','c7','c8',
'd1','d2','d3','d4','d5','d6','d7','d8',
'e1','e2','e3','e4','e5','e6','e7','e8',
'f1','f2','f3','f4','f5','f6','f7','f8',
'g1','g2','g3','g4','g5','g6','g7','g8',
'h1','h2','h3','h4','h5','h6','h7','h8'
];
const darkOnes=['a1','a3','a5','a7','b2','b4','b6','b8','c1',
'c3','c5','c7','d2','d4','d6','d8','e1','e3','e5','e7','f2',
'f4','f6','f8','g1','g3','g5','g7','h2','h4','h6','h8'];

let nextBtn = document.querySelector('#next-btn');
let output1 = document.querySelector('#output1');
let output2 = document.querySelector('#output2');
let sameBtn = document.querySelector('#same-btn');
let differentBtn = document.querySelector('#different-btn');
let randomIndex = getRandomNumber(0, board1.length-1);
let randomIndex2 = getRandomNumber(0, board2.length-1);
let randomNumber = board1[randomIndex];
let randomNumber2 = board2[randomIndex2];
let cCounter = 0;
let iCounter = 0;



function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
   

    return result;
}

nextBtn.addEventListener('click', () => {
    if(board1.length == 0){
        output1.innerText = 'Exercise ';
        output2.innerText = 'Completed!';
        return;
    }
    let randomIndex = getRandomNumber(0, board1.length-1);
    randomNumber = board1[randomIndex];
    board1.splice(randomIndex, 1)
    output1.innerText = randomNumber;
    answer.innerText = " ";

    let randomIndex2 = getRandomNumber(0, board2.length-1);
    randomNumber2 = board2[randomIndex2];
    board2.splice(randomIndex2, 1)
    output2.innerText = randomNumber2;

});
document.body.addEventListener('keydown',(e)=> {
    if(e.key == " " || e.code == "Space"){
        if(board1.length == 0){
            output1.innerText = 'Exercise ';
            output2.innerText = 'Completed!';
            return;
        }
        let randomIndex = getRandomNumber(0, board1.length-1);
        randomNumber = board1[randomIndex];
        board1.splice(randomIndex, 1)
        output1.innerText = randomNumber;
        answer.innerText = " ";
    
        let randomIndex2 = getRandomNumber(0, board2.length-1);
        randomNumber2 = board2[randomIndex2];
        board2.splice(randomIndex2, 1)
        output2.innerText = randomNumber2;
    }
})

sameBtn.addEventListener('click',()=>{
    if(darkOnes.includes(randomNumber)){
        if(darkOnes.includes(randomNumber2)){
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
            answer.innerText="Correct!";
            
        }else{
            iCounter++;
            document.getElementById("incorrect-score").innerHTML=iCounter;
            answer.innerText="Incorrect!";
        }
    }else{
        if(darkOnes.includes(randomNumber2)){
            iCounter++;
            document.getElementById("incorrect-score").innerHTML=iCounter;
            answer.innerText="Incorrect!";
        }else{
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
            answer.innerText="Correct!";
        }

    }

})
document.body.addEventListener('keydown',(e)=> {
    if(e.key == "s"){
        if(darkOnes.includes(randomNumber)){
            if(darkOnes.includes(randomNumber2)){
                cCounter++;
                document.getElementById("correct-score").innerHTML=cCounter;
                answer.innerText="Correct!";
                
            }else{
                iCounter++;
                document.getElementById("incorrect-score").innerHTML=iCounter;
                answer.innerText="Incorrect!";
            }
        }else{
            if(darkOnes.includes(randomNumber2)){
                iCounter++;
                document.getElementById("incorrect-score").innerHTML=iCounter;
                answer.innerText="Incorrect!";
            }else{
                cCounter++;
                document.getElementById("correct-score").innerHTML=cCounter;
                answer.innerText="Correct!";
            }
    
        }
    }
})

differentBtn.addEventListener('click',()=>{
    if(darkOnes.includes(randomNumber)){
        if(darkOnes.includes(randomNumber2)){
            iCounter++;
            document.getElementById("incorrect-score").innerHTML=iCounter;
            answer.innerText="Incorrect!";
        }else{
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
            answer.innerText="Correct!";
        }
    }else{
        if(darkOnes.includes(randomNumber2)){
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
            answer.innerText="Correct!";
        }else{
            iCounter++;
            document.getElementById("incorrect-score").innerHTML=iCounter;
            answer.innerText="Incorrect!";
        }

    }

})

document.body.addEventListener('keydown',(e)=> {
    if(e.key == "d"){
    if(darkOnes.includes(randomNumber)){
        if(darkOnes.includes(randomNumber2)){
            iCounter++;
            document.getElementById("incorrect-score").innerHTML=iCounter;
            answer.innerText="Incorrect!";
        }else{
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
            answer.innerText="Correct!";
        }
    }else{
        if(darkOnes.includes(randomNumber2)){
            cCounter++;
            document.getElementById("correct-score").innerHTML=cCounter;
            answer.innerText="Correct!";
        }else{
            iCounter++;
            document.getElementById("incorrect-score").innerHTML=iCounter;
            answer.innerText="Incorrect!";
        }

    }
    }})