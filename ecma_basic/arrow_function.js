/////////////////////
// Arrow Functions //
/////////////////////

// const add = (a, b) => {
//     return a + b
// }

// Implicit
// const add = (a, b) => a + b

// add(1, 2)


// const numbers = [1, 2, 3]

// const namba = numbers.map(number => 2 * number)

// console.log(namba)


// const team = {
//     members : ['Jane', 'Bill'],
//     teamName : 'Super Squad',
//     teamSummary : function(){
//         return this.members.map(function(member){
//             return `${member} is on team ${this.teamName}`
//         }.bind(this))
//     }
// }

// console.log(team.teamSummary())

// const team = {
//     members : ['Jane', 'Bill'],
//     teamName : 'Super Squad',
//     teamSummary : function(){
//         return this.members.map((member) => {
//             return `${member} is on team ${this.teamName}`
//         })
//     }
// }

// console.log(team.teamSummary())