function rollDice(){
    return 1 + Math.floor(Math.random()*6)
}
    for(let i =1; i <6; i++) 



function d6(){
    var roll = Math.random();
    roll= (roll *6) +1;
    roll= Math.floor(roll);
    return roll;
}
var playerRoll = d6();
console.log(playerRoll);

function d6(){
    var roll = Math.floor( Math.random()*6) +1;
return roll;
}


var lifeAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];


function oracle(array){
    var choice = Math.floor(Math.random()* lifeAnswers.length);

    var answer = lifeAnswers[choice];

    console.log(answer);
}
var answer = oracle(lifeAnswers);