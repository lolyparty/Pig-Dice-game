//Game Play Modal
window.addEventListener('load', ()=>{
    document.querySelector('.container').style.pointerEvents = 'none';
})
document.querySelector('#instruction').style.display = 'none';

function gamePlayInst(){
    document.querySelector('.howtoplay').style.display = 'none';
    document.querySelector('#instruction').style.display = 'block';
    document.querySelector('.container').style.pointerEvents = 'auto';
}

document.querySelector('#start').addEventListener('click', gamePlayInst);

function instructclick(){
    document.querySelector('.howtoplay').style.display = 'block';
    document.querySelector('#instruction').style.display = 'none';
    document.querySelector('.container').style.pointerEvents = 'none';
}

document.querySelector('#instruction').addEventListener('click',instructclick);

//Dice gameplay
var score, activePlayer, roundScore, gamePlaying;

score = [0,0];
activePlayer = 0;
roundScore = 0;
gamePlaying = true;


//DOM manipulation
function init(){
        score = [0,0];
        activePlayer = 0;
        roundScore = 0;
        gamePlaying = true;


        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';

        document.getElementById('roundscore-0').textContent = '0';
        document.getElementById('roundscore-1').textContent = '0';

        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

        document.querySelector('.player-0-panel').classList.add('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');

        document.querySelector('#player-0-name').textContent = 'PLAYER 1';
        document.querySelector('#player-1-name').textContent = 'PLAYER 2';

}

//initialising the game
init();

 //global function
function btn(){
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.getElementById('roundscore-0').textContent = '0';
        document.getElementById('roundscore-1').textContent = '0';
        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

}

//on click, new game button
document.querySelector('.new-game').addEventListener('click', init);


    //Roll button
    document.querySelector('.roll').addEventListener('click', function(){
        if(gamePlaying){
                Dice1 = Math.floor(Math.random() * 6) + 1;
                Dice2 = Math.floor(Math.random() * 6) + 1;
                diceSum = Dice1 + Dice2;
                roundScore += diceSum;
                
                document.querySelector('#dice-1').style.display = 'block';
                document.querySelector('#dice-2').style.display = 'block';

                document.querySelector('#dice-1').src = 'img/dice-' + Dice1 + '.png';
                document.querySelector('#dice-2').src = 'img/dice-' + Dice2 + '.png';
                
                if(Dice1 !== 1 && Dice2 !== 1){
                    document.querySelector('#roundscore-' + activePlayer).textContent = roundScore;
                }
                else{
                    btn();
                }
        }
    });



//on click, hold button
document.querySelector('.hold').addEventListener('click', function(){
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer]; 
    var winningScore;
    var finalScore = document.querySelector('.finalscore').value;


    if (finalScore){
        winningScore = finalScore;
    } else{
        winningScore = 100;
    }

    //to determine winner
    if (score[activePlayer] >= winningScore){

        document.querySelector('#player-' + activePlayer + '-name').textContent = 'WINNER!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');

        document.querySelector('#dice-1').style.display = 'none';
        document.querySelector('#dice-2').style.display = 'none';

        roundScore = 0;
        document.getElementById('roundscore-' + activePlayer).textContent = '0';

        gamePlaying = false;
    }
    else{
        btn();
    }
    
});




