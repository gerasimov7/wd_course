function greetings() {
    // DO NOT CHANGE
    // взимаме въведената от потребителя стойност за град:
    var userTown = document.getElementById("town").value;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // Task 1: Изпишете в конзолата съдържанието на променливата userTown
    console.log(userTown)

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    // Task 2:
    // ако потребителят е избрал 'София', то да се изпише в конзолата:
    // "Здравей!"
    // ако потребителят е избрал 'Париж', то да се изпише в конзолата:
    // "Salut!"
    // ако потребителят е избрал 'Лондон', то да се изпише в конзолата:
    // "Hi!"
    // --> YOUR CODE STARTS HERE <--
    if (userTown === "София") {
        console.log("Здравей!");
    } else if (userTown === "Париж") {
        console.log("Salut!");
    } else if (userTown === "Лондон") {
        console.log("Hi!")
    } else {
        console.log("City not found!")
    }
    // --> YOUR CODE ENDS HERE <--

    // DO NOT CHANGE
    // внимавайте, да не изтриете затварящата '}' фигурна скоба по-долу :)
}