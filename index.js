/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


let votingAge = 25;

if (votingAge > 18) {
    console.log(true);
};



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let myStuff = 42;

let yrStuff = 31;

console.log(` I have ${myStuff} and you have ${yrStuff} .`)

if (myStuff > yrStuff && yrStuff > 30) {
    myStuff = myStuff + (yrStuff/7) * (13/yrStuff);
    console.log(` Now, I have ${myStuff} and you have ${yrStuff} .`)
} else if (myStuff > yrStuff && yrStuff < 30) {
    myStuff = myStuff + (66-myStuff);
    yrStuff = yrStuff + (33-yrStuff)
    console.log(`Now, I have ${myStuff} and you have ${yrStuff} .`)
}





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(Number("1999"));



//Task d: Write a function to multiply a*b 

function simpleMult(a, b) {
    let sum = a * b;
    console.log(sum);
}

simpleMult(5,10);



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(age) {
    let dogAge = age * 7;
    console.log(`You are ${age} , and ${dogAge} in "dog years".`);
}

dogYears(25);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight,age) {
    if (age >= 1 && weight > 15) {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight / 50} lbs. of raw food.`);
    } else if (age >= 1 && weight > 10) {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight * .03} lbs. of raw food.`)
    } else if (age >= 1 && weight > 5) {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight * .04} lbs. of raw food.`)
    } else if (age >= 1 && weight <= 5) {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight * .05} lbs. of raw food.`)
    } else if (age < 1 && age >= .58) {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight * .04} lbs. of raw food.`)
    } else if (age < 1 && age >= .33) {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight * .05} lbs. of raw food.`)
    } else if (age < 1 && age >= .16) {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight * .1} lbs. of raw food.`)
    } else {
        console.log(`This dog is ${age} years old, weighs ${weight} lbs. and needs ${weight * .1} lbs. of raw food.`)
    }
};

dogFeeder(15, 1);



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors(choice) {

    /* PICKS RANDOM 0-2 */
    let picker = Math.floor(Math.random() * Math.floor(3));
    
    /*ROCK = 0 */
    if (picker === 0 && choice === "rock") {
        console.log(`You chose ${choice} and the computer chose Rock. It's a tie!`);
    } else if (picker === 0 && choice === "paper") {
        console.log(`You chose ${choice} and the computer chose Rock. Paper covers Rock. You win!`);
    } else if (picker === 0 && choice === "scissors") {
        console.log(`You chose ${choice} and the computer chose Rock. Rock crushes scissors. You Lose!`);
    /*PAPER = 1 */
    } else if (picker === 1 && choice === "rock") {
        console.log(`You chose ${choice} and the computer chose Paper. Paper covers Rock. You lose!`);
    } else if (picker === 1 && choice === "paper") {
        console.log(`You chose ${choice} and the computer chose Paper. It's a tie. Try again!`);
    } else if (picker === 1 && choice === "scissors") {
        console.log(`You chose ${choice} and the computer chose Paper. Scissors cut Paper. You won!`);
    /*SCISSORS =2 */    
    } else if (picker === 2 && choice === "rock") {
        console.log(`You chose ${choice} and the computer chose Scissors. Rock crushes scissors. You won!`);
    } else if (picker === 2 && choice === "paper") {
        console.log(`You chose ${choice} and the computer chose Scissors. Scissors cut paper. You lose!`);
    } else if (picker === 2 && choice === "scissors") {
        console.log(`You chose ${choice} and the computer chose Scissors. It's a tie!. Try again!`);
    } else {
        console.log("Incorrect input. Please try again.");
    }
    
}  

rockPaperScissors("paper");
  


/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km) {
    let miles = km / 1.609344;
    console.log(`${km} kilometers is ${miles} miles.`);
}

kmToMiles(1);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ftToCent(ft) {
    let centimeter = ft * 30.48;
    console.log(`${ft} feet is ${centimeter} centimeters.`)
}

ftToCent(2);



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(start) {

    for (i= start; i > 0; i--) {
        console.log(`${i} bottles of beer on the wall, ${i} bottles of beer. Take one down, pass it around, ${i-1} bottles of beer on the wall.`);
    }
};

annoyingSong(99);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corresponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalc(grade) {

    let finalGrade = undefined;

    if (grade > 89) {
        finalGrade = "A";
        console.log(`You scored ${grade}% for a ${finalGrade}. Congratulations!`);
    } else if (grade > 79) {
        finalGrade = "B";
        console.log(`You scored ${grade}% for a ${finalGrade}. Good Job!`);
    } else if (grade > 69) {
        finalGrade = "C";
        console.log(`You scored ${grade}% for a ${finalGrade}. Keep Trying!`);
    } else if (grade > 59) {
        finalGrade = "D";
        console.log(`You scored ${grade}% for a ${finalGrade}. Try Harder!`);
    } else if ( grade < 59) {
        finalGrade = "F";
        console.log(`You scored ${grade}% for a ${finalGrade}. Try Again!`);
    } else {
        console.log("Incorrect input. Try again.")
    };
};
  
gradeCalc(88);  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





