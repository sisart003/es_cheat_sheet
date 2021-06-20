///////////////////
// Destructuring //
///////////////////

// var expense = {
//     type: 'Business',
//     amount: '$45 USD'
// }

// Traditional
// var type = expense.type;
// var amount = expense.amount;

// ES6
// const{ type, amount } = expense;
// console.log(type)
// console.log(amount)


// var savedFiled = {
//     extension: '.jpg',
//     name: 'repost',
//     size: 14040
// }

// function fileSummary({ name, extension, size}){
//     return `The file ${name}.${extension} is of size ${size}`
// }

// console.log(fileSummary(savedFiled))



// const companies = [
//     'Google',
//     'Facebook',
//     'Uber'
// ]

// const [name, ...rest] = companies

// console.log(companies)



// const companies = [
//     { name: 'Google', locationz: 'Mountain View'},
//     { name: 'Facebook', locationz: 'Menlo Park'},
//     { name: 'Uber', locationz: 'San Francisco'}
// ]

// const [{ locationz }] = companies

// console.log(locationz)

// const Google = {
//     locations : ['Mountain View', 'New York', 'London']
// }

// const { locations: [locationz]} = Google
// console.log(locationz)