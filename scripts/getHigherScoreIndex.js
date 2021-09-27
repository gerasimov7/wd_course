let students = ["Ivan", "Pesho", "Maria"];
let scores = [5, 4, 6];


// TASK: дефинирайте функция 'getHighestScoreIndex()', която да връща индекса на най-големият елемент от масива scores.

function getHighestScoreIndex(entry) {
    let max = entry[0];
    let maxIndex = 0;

    for (var i = 1; i < entry.length; i++) {
        if (entry[i] > max) {
            maxIndex = i;
            max = entry[i];
        }
    }
    return maxIndex;
}

// TASK: като използвате функцията getHighestScoreIndex() изпишета в конзолата името на студента с най-висока оценка:

console.log(`${students[getHighestScoreIndex(scores)]} has the highest score: ${scores[getHighestScoreIndex(scores)]}`);

// expected output
// Maria has the higest score: 6