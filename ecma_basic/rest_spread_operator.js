//////////////////////////////
// Rest and Spread Operator //
//////////////////////////////

// function addNumbers(...numbers){
//     return numbers.reduce((sum, number) => {
//         return sum + number
//     }, 0)
// }

// addNumbers(1, 2, 3, 4, 5)


// const defaultColors = ['red', 'green']
// const userFavoriteColors = ['orange', 'yellow']

// console.log([ ...defaultColors, ...userFavoriteColors])


// function validateShoppingList(...items){
//     if(items.indexOf('milk') < 0){
//         return ['milk', ...items]
//     }

//     return items;
// }

// console.log(validateShoppingList('oranges', 'bread', 'eggs'))

// const MathLibrary = {
//     calculateProduct(...rest){
//         console.log('Please use the multiply method instead')
//         return this.multiply(...rest)
//     },
//     multiply(a, b){
//         return a * b;
//     }
// }