let firstName = "John"
let surname = "Doe"
console.log(firstName, surname);

let excercise22 = { name: "John", surname: "Doe", email: "email@gmail.com" }
console.log(excercise22)

delete excercise22.email
console.log(excercise22)

let excercise24 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
console.log(excercise24)

function randomNumbers() {
    // return Math.floor(Math.random() * 100)
    let numberContainer = []
    for (let index = 1; index < 101; index++) {
        numberContainer.push(Math.floor(Math.random() * 100))

    }
    return numberContainer
}

let numberList = randomNumbers()
console.log(numberList)

function maxMin(array) {

    let maxNumber = Math.max(...array)
    let minNumber = Math.min(...array)

    return {
        maxNumber, minNumber
    }
}
console.log(maxMin(numberList))

// TODO

// function arrayOfArrayRandom(value) {
//     let arrayOfArray = [[]]

//     for (let index = 1; index < 10; index++) {
//         container.push(Math.floor(Math.random() * 10))

//     }
// }


// console.log(arrayOfArrayRandom(2))

function longestArray(array1, array2) { //FIXME

    if (array1.length > array2.length) {
        console.log(array1, "is the longest array")
    } else {
        console.log(array2, "is the longest array")
    }

}

let arrayExample1 = ['1', '2', '3']
let arrayExample2 = ['1', '2', '3', '4', '5']
console.log(longestArray(arrayExample1, arrayExample2))

function higherSum(array1, array2) {

    let sum1 = 0
    let sum2 = 0
    let result
    for (let index = 0; index < array1.length; index++) {
        sum1 += array1[index];
    }
    for (let index = 0; index < array2.length; index++) {
        sum2 += array2[index];
    }


    if (sum1 > sum2) {
        result = ('First array is the longest one, Total:', sum1)
    } else {
        result = ('Second array is the longest one, Total:', sum2)
    }
    return result
}

let arrayExample3 = [1, 2, 3]
let arrayExample4 = [1, 2, 3, 4, 5]

console.log(higherSum(arrayExample3, arrayExample4))

function getContainer() {
    let containerSelector = document.getElementById('container');
    return containerSelector
}

// TODO
function getEveryTd() {
    let allTd = document.querySelectorAll('td');
    let tdNode = []
    for (let index = 0; index < allTd.length; index++) {
        tdNode.push(allTd.innerText);
    }
    console.log(tdNode)

}

// TODO
// function printTextTd() {
//     let tdNode = document.querySelectorAll('td')
//     let textContainer = []
//     for (let index = 0; index < tdNode.length; index++) {
//         textContainer.push(index);
//     }
//     return textContainer
// }

// console.log(printTextTd())

function changeH1() {
    let h1Node = document.querySelector('h1')
    h1Node.classList.add('new-color')
    return "H1 new color is red"
}

function extraRow() {
    let rowNode = document.querySelector('table')
    let row = document.createElement("tr");
    let cell1 = document.createElement("td");
    let cell2 = document.createElement("td");
    let cell3 = document.createElement("td");
    let cell4 = document.createElement("td");
    cell1.innerHTML = "1";
    cell2.innerHTML = "2";
    cell3.innerHTML = "3";
    cell3.innerHTML = "4";
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    rowNode.appendChild(row);

}

function addRedBackground() {
    let linkNode = document.querySelectorAll('link')
    for (let redBackground of linkNode) {
        redBackground.classList.add('red-background')
    }
}

// window.onload = alert("Page loaded")

function addItemToUl() {
    let ulNode = document.querySelector('ul')
    let ilNode = document.createElement('li')
    ilNode.innerText = "New item"
    ulNode.appendChild(ilNode)
}

function emptyUl() {
    let ulNode = document.querySelector('ul')
    ulNode.innerHTML = ""
}