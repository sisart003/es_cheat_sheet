///////////////////
// Reduce Helper //
///////////////////

// var numbers = [10, 20, 30]
// var sum = 0

// for (var i = 0; i < numbers.length; i++){
//     sum += numbers[i]
// }

// console.log(sum)

// console.log("-----")

// var numberzz = numbers.reduce(function(sum, number){
//     return sum + number;
// }, 0)

// console.log(numberzz)

// -------------------------------------------------------

// var primaryColors = [
//     {color: 'red'},
//     {color: 'yellow'},
//     {color: 'blue'}
// ]

// var colorzzz = primaryColors.reduce(function(previous, primaryColor){
//     previous.push(primaryColor.color)

//     return previous;
// }, [])

// console.log(colorzzz)


// -------------------------------------------------------

// function balancedParens(string){
//     return !string.split("").reduce(function(previous, char){
//         if(previous < 0) { return previous }
//         if(char === "(") { return ++previous }
//         if(char === ")") { return --previous }

//         return previous;
//     }, 0)
// }

// console.log(balancedParens("(())"))