// TASK: Да се дефинира функция SumEven2DimArrayElements(), която връща сумата от четните елементи на подаденият й двумерен масив.

function SumEven2DimArrayElements(entry) {
    let row = entry.length;
    let cols = entry[0].length;
    let sumTotalEven = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cols; j++) {
            const element = entry[i][j];
            if (element % 2 == 0) {
                sumTotalEven = sumTotalEven + element;
            }
        }
    }
    return sumTotalEven;
}

// TEST:
let arr = [
    [1, 2, 3],
    [4, 5, 6]
];

let sum = SumEven2DimArrayElements(arr);
console.log(sum);

// expected output: 12