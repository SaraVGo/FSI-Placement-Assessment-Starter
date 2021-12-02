// HINT: You can delete this console.log after you no longer need it!
let cookies = document.querySelectorAll(".cookies")
console.log(cookies)

// First, tell us your name
let yourName = "Sara V Gomez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let gbButtonUp = document.getElementById("add-gb");
let gbButtonDown = document.getElementById("minus-gb");

let ccButtonUp = document.getElementById("add-cc");
let ccButtonDown = document.getElementById("minus-cc");

let sugarButtonUp = document.getElementById("add-sugar");
let sugarButtonDown = document.getElementById("minus-sugar");



//Isolating the votes on table*// 
let gbVotes= document.querySelector("#qty-gb");
let ccVotes= document.querySelector("#qty-cc");
let sugarVotes= document.querySelector("#qty-sugar");
let TotalVotes= document.querySelector("#qty-total");

// Event listener for clicks on the "+" button for Gingerbread cookies


gbVotes.addEventListener('click', function(e) {
     gb = gb + 1;
     gbVotes.textContent = gb;
    console.log ('Gingerbread + button was clicked!')
    localStorage.setItem('gb-votes', gb);

 total = gb 
