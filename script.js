////////////////////
// forEach Helper //
////////////////////
// var colors = ['red', 'blue', 'yellow',]

// colors.forEach(function(color){
//     console.log(color);
// })

// Create an array of numbers
// let numbers = [1, 2, 3, 4, 5]

// Create a variable to hold the sum
// var sum = 0
// function adder(number){
//     sum += number;
// }

// Loop over the array, incrementing the sum variable
// numbers.forEach(function(number){
//     sum += number;
// })
// 
// numbers.forEach(adder)

// Print the sum variable
// console.log(sum)



////////////////
// Map Helper //
////////////////
// var numbers = [1,2,3,4,5]

// var doubled = numbers.map(function(number){
//     return number * 2
// })

// console.log(doubled)

// var cars = [
//     {model: 'Buick', price: 'Cheap'},
//     {model: 'Camaro', price: 'Expensive'}
// ]

// var prices = cars.map(function(car){
//     return car.price
// })

// console.log(prices)


///////////////////
// Filter Helper //
///////////////////

// Traditional
// let products = [
//     {name: 'cucumber', type: 'vegetable', quantity : 0, price : 1},
//     {name: 'banana', type: 'fruits', quantity : 10, price : 15},
//     {name: 'celery', type: 'vegetable', quantity : 30, price : 13},
//     {name: 'orange', type: 'fruits', quantity : 3, price : 5}
// ]

// var filteredProducts = [];

// for (var i = 0; i < products.length; i++){
//     if (products[i].type === 'fruits'){
//         filteredProducts.push(products[i])   
//     }
// }

// console.log(filteredProducts)

// Filter
// var product =  products.filter(function(product){
//     return product.type === 'vegetable';
// })

// console.log(product)

// var productz = products.filter(function(product){
//     return product.type === 'vegetable' && product.quantity > 0 && product.price < 20
// })

// console.log(productz)