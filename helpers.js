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



/////////////////
// Find Helper //
/////////////////

// let users = [
//     { name: 'Jill'},
//     { name: 'Alex'},
//     { name: 'Bill'}
// ];

// var user;

// for (var i = 0; i < users.length; i++){
//     if(users[i].name === 'Alex'){
//         user = users[i];
//     }
// }

// var user = users.find(function(user){
//     return user.name === 'Alex'
// })

// console.log(user)



// var posts = [
//     { id: 1, title : 'New Post'},
//     { id: 2, title : 'Old Post'}
// ]

// var comment = { postId: 1, content: 'Great Post'}

// function postForComment(posts, comment){
//     return posts.find(function(post){
//         return post.id === comment.postId
//     })
// }

// console.log(postForComment(posts, comment))




////////////////////
// every and some //
////////////////////

// var computers = [
//     { name: 'Apple', ram: 24},
//     { name: 'Compaq', ram: 4},
//     { name: 'Acer', ram: 32}
// ]

// var allComputersCanRunProgram = true;
// var onlySomeComputersCanRunProgram = false;

// for (var i = 0; i < computers.length; i++){

//     var computer = computers[i]

//     if(computer.ram < 6){
//         allComputersCanRunProgram = false;
//     }else{
//         onlySomeComputersCanRunProgram = true;
//     }
// }



// console.log(computer)
// console.log("___")

// console.log(allComputersCanRunProgram)
// console.log(onlySomeComputersCanRunProgram)

// var comshop = computers.every(function(computer){
//     return computer.ram > 16;
// })

// var comzhop = computers.some(function(computer){
//     return computer.ram > 16;
// })

// console.log(comshop)
// console.log(comzhop)


// var names = [
//     "Alexandria",
//     "Matthew",
//     "joe"
// ];

// names.every(function(name){
//     return name.length > 4;
// })

// names.some(function(name){
//     return name.length > 4;
// })


// function field(value){
//     this.value = value;
// }

// field.prototype.validate = function(){
//     return this.value.length > 0;
// }

// var username = new field("2cool")
// var password = new field("my_password")

// var fields = [username, password];

// var formValidation = fields.every(function(field){
//     return field.validate()
// })

// if (formValidation){
//     console.log(true)
// }else{
//     console.log(false)
// }




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

function balancedParens(string){
    return !string.split("").reduce(function(previous, char){
        if(previous < 0) { return previous }
        if(char === "(") { return ++previous }
        if(char === ")") { return --previous }

        return previous;
    }, 0)
}

console.log(balancedParens("(())"))