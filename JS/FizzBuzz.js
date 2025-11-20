
// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {

    // Check if number divisible by BOTH 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    }
    // divisible by 3 only
    else if (i % 3 === 0) {
        console.log("fizz");
    }
    // Check if number divisible by 5 only
    else if (i % 5 === 0) {
        console.log("buzz");
        
    }
    // If not divisible by 3 or 5 → print the number itself
    else {
        console.log(i);
    }
}
