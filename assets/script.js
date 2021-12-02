// HINT: You can delete this console.log after you no longer need it!
let cookies = document.querySelectorAll(".cookies")
console.log(cookies)

// First, tell us your name
let yourName = "Sara V Gomez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let ButtonUp = document.getElementById("quantity-up");
let ButtonDown = document.getElementById("quantity-down");


//Isolating the votes on table*//
let gbVotesCell = document.querySelector("#Gingerbread-votes");


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function(e) 

{gbVoteBtn.addEventListener('click',function(e) {
    let gbVotesCount = parseInt(gbVotesCell.textContent);
    gbVotesCount = gbVotesCount + 1;
    gbVotesCell.textContent = gbVotesCount;
});


    ButtonUp.addEventListener('click', function(e) {
    gb = gb + 1;

})
    // HINT: You can delete this console.log after you no longer need it!
   
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons
