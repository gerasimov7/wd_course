let numbers = [-2, 3, 7, 8, -1, 4, 2];
let total = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] % 2 === 0) {
        total += numbers[i];
    }
}
console.log(total);