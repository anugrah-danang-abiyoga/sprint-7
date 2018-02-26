/* Task 1: Minimum */

function min(num1, num2) {
    if (num1 > num2) {
        return num2;
    } else if (num1 < num2) {
        return num1; 
    } else {
        return num1;
    }
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


/* Task Two: Recursion */

function isEven(num) {
    if (num == 0) {
        return true;
    } else if (num == 1) {
        return false;
    } else if (num < 0) {
        isEven (num + 2);
    } else {
        (num - 2);
    }
}
 
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

/* Task Three: Been Counting */ 

function countBs(str) {
    var count = 0;
    for (i = 0; i < word.length; i++)
    if (word[i] === 'B') {
        count++
    }
    return count
}

function countChar(word, letter) {
    var count = 0;
    for (i = 0; i < word.length; i++)
    if (word [i] === letter) {
        count++ 
    } 
    return count
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4