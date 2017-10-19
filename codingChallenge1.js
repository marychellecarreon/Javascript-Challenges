////Coding Challenge 1///////

/*
John and a friend invented a simple game where the player with
the highest value of his height (in centimeters) plus five times
his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign 
them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score
in the string that you output to the console. Don't forget that  there 
can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will 
need the && operator to take the decision. If you can't solve this one 
just watch the solution, it's no problem :)
*/

var player1 = 'John';
var player2 = 'Jeff';
var player3 = 'Rodolf';

var height1 = 190;
var height2 = 170;
var height3 = 176;

var age1 = 27;
var age2 = 24;
var age3 = 30;

var score1 = height1 + (5 * age1);
var score2 = height2 + (5 * age2);
var score3 = height3 + (5 * age3);

if (score1 > score2 && score1 > score3) {
	console.log(player1 + ' wins with the score of ' + score1 + ' points');
} else if (score2 > score1 && score2 > score3) {
	console.log(player2 + ' wins with the score of ' + score2 + ' points');
} else if (score3 > score1 && score3 > score2) {
	console.log(player3 + ' wins with the score of ' + score3 + ' points');
} else {
	console.log('There is a draw');	
}
