// масив от обекти представящи данни за различни марки бири:
const beers = [
    { name: "Ариана", color: "светло", prices: [1.3, 2, 2.4], town: "София" },
    { name: "Ариана", color: "тъмно", prices: [1.4, 2.2, 2.8], town: "София" },
    { name: "Каменица", color: "светло", prices: [1.5, 2.5, 3], town: "Пловдив" },
    { name: "Загорка", color: "светло", prices: [2, 3, 3.6], town: "Стара Загора" },
];
console.log("The beers array: ", beers);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ПРИМЕР: изписване на имената и цвета на всички бири:
let lowestPrice = beers[0].prices[2];
let lowestBrand = beers[0].name;
let lowestColor = beers[0].color;

for (let i = 0, len = beers.length; i < len; i++) {
    const beer = beers[i];

    console.log(`${beer.name} - ${beer.color}`);
    // }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ЗАДАЧА: намиране на най-евтината бира по 3-та цена:
    // да се изпише в конзолата името, цвета и цената на най-евтината бира, като използваме за сравнението 3-тата цена в масива prices:
    if (beers[i].prices[2] < lowestPrice) {
        lowestPrice = beers[i].prices[2];
        lowestBrand = beers[i].name;
        lowestColor = beers[i].color;
    }
}

console.log(`"${lowestBrand}, ${lowestColor}" - ${lowestPrice}`);

// очакван изход:
// "Ариана, светло" - 2.4
