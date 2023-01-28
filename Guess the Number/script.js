let array = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20",];
let running = true;
let item = array[Math.floor(Math.random()*array.length)]; 
    item = parseInt(item);
let statusMsg = document.querySelector('.instruction');
let input = document.querySelector('.input');
let displayBlock = document.querySelector('.display');
let colorWin = document.querySelector('body');
let highScoreP = document.querySelector('.highScore');


i = 20;

k = 0

let reset = document.querySelector('.reset').addEventListener('click', () => {

    item = array[Math.floor(Math.random()*array.length)]; 
    item = parseInt(item);
    statusMsg.innerText = 'Start Guessing...';
    running = true;
    colorWin.style.backgroundColor = 'grey'
    input.value = '';
    displayBlock.style.backgroundImage = "url(img/65110.png)";
    displayBlock.innerText = '';
    let scoreP = document.querySelector('.score').innerText = `Score:`;
    input.disabled = false;
    i = 20;

});


let checkBtn = document.querySelector('.check').addEventListener('click', () => {

    if(running !== true){
        return;
    }else{

    let scoreP = document.querySelector('.score').innerText = `Score: ${i-1}`;

    i--; 
    
    
        scoreP.innerText = `Score: ${i}`;

    
    if(input.value > 20 || input.value < 0){
        statusMsg.innerText = 'You can only enter numbers from 0 to 20!'
    }else if(input.value == item){
   
    
    displayBlock.innerText = input.value;
    displayBlock.style.backgroundImage = "none";
    colorWin.style.backgroundColor = 'aquamarine'
    statusMsg.innerText = 'You win!'
    running = false;
    input.disabled = true;
    if(i > k){
        k = i;
        highScoreP.innerText = `Highscore: ${k}`;
    }
    
    return;
    

   }else if(input.value < item){

    statusMsg.innerText = 'Too Low'
    return;

   }else{

    statusMsg.innerText = 'Too High'
    return;

   }
}
});
