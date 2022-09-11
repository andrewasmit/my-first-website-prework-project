const clickMessage = document.getElementById("simple-js-message");

clickMessage.addEventListener("click", function(){
    alert('You clicked the "JavaScript Message" button and now this message appeared!');
});

// Guessing Game 
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


// To-Do List App
const todoButton = document.getElementById("todo-button");
todoButton.addEventListener("click", function(){

    let command = prompt("What would you like to do with your to-do list?");
    const todoList = []
    while (command !== "quit" && command !== "q") {
        if (command ==="list"){
            console.log("*******")
            for(let i =0; i< todoList.length; i++){
                console.log(`${i}: ${todoList[i]}`);
            }
            console.log("*******")
        }else if (command ==="add"){
            const newTodo = prompt("Ok! What would you like to add to the list?")
            todoList.push(newTodo);
            console.log(`${newTodo} added to list.`);
        }else if (command ==="remove"){
            const index = parseInt(prompt("OK. Enter an index to delete."));
                if (!Number.isNaN(index)){
                    const deleted = todoList.splice(index, 1);
                    console.log (  `${deleted[0]} has been removed from your list.`);
                } else {
                    console.log ("Unknown index.")
                }
        }
        command = prompt("What would you like to do?")
    }
    console.log("OK. You quit the app.")
})