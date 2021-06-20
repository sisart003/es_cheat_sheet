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