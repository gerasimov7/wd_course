// TASK: да се дефинира функцията findMaxEven(), която да връща максималното четно число от подаденият й масив.

function findMaxEven(numbers) {
    let highestNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > highestNumber && element % 2 == 0) {
            highestNumber = element;
        }
    }
    return highestNumber;
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max even number of ${numbers} is ${max}`);