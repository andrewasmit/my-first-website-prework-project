const clickMessage = document.getElementById("simple-js-message");

clickMessage.addEventListener("click", function(){
    alert('You clicked the "JavaScript Message" button and now this message appeared!');
});


const gameStartButton = document.getElementById("guess-game-button");
gameStartButton.addEventListener("click", function(){
    let maxNum = parseInt(prompt("Pick a maximum number."));
    while (!maxNum) {
        maxNum = parseInt(prompt("Enter a valid number."))
    };

    const targetNum = Math.floor(Math.random() * maxNum) +1;
    console.log(targetNum)
    let guess = parseInt(prompt("Enter your first guess."));
    let attempts =1;
   
    while (guess !==targetNum){
        attempts++;
       if (guess >targetNum) {
        guess = parseInt(prompt("Nope! Your guess was too high. Try Again!"))
    } else {
        guess = parseInt(prompt("Nope! Your guess was too low. Try Again!"));
    }
    if(guess===targetNum){
        alert(`Congrats! You guessed correctly and it only took you ${attempts} guesses!`)
    }
}})

