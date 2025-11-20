// ===============================
// TASK 1: FIZZBUZZ
// ===============================
function fizzBuzz() {
    console.log("===== TASK 1: FIZZBUZZ =====");

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        }
    }

    console.log("===== END OF FIZZBUZZ =====\n");
}



// ===============================
// TASK 2: PRIME NUMBERS
// ===============================
function primeNumbers() {
    console.log("===== TASK 2: PRIME NUMBERS =====");

    for (let i = 1; i <= 100; i++) {
        let isPrime = true;

        if (i < 2) {
            isPrime = false;
        }

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }

    console.log("===== END OF PRIME NUMBERS =====");
}




// ===============================
// CALL THE TASKS
// ===============================
fizzBuzz();
primeNumbers();