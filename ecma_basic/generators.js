////////////////
// Generators //
////////////////

// function *shopping(){

//     // stuff on the sidewalk

//     // walking down the sidewalk

//     // go into the store with cash
//     const stuffFromStore = yield 'cash'

//     // walking to laundry place
//     const cleanClothes = yield 'laundry'

//     // walking back home
//     return [stuffFromStore, cleanClothes]

// }

// const gen = shopping()

// console.log(gen.next()) // Leaving our house
// console.log(gen.next('groceries')) // Leaving the store with groceries

// console.log(gen.next('clean clothes'))



// function* colors(){
//     yield 'red'
//     yield 'blue'
//     yield 'green'
// }

// const gen = colors()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// const myColors = []

// for(let color of colors()){
//     myColors.push(color)
// }

// myColors


// const testingTeam = {
//     lead: 'Amanda',
//     tester: 'Bill',
//     [Symbol.iterator]: function* (){
//         yield this.lead
//         yield this.tester
//     }
// }

// const engineeringTeam = {
//     testingTeam,
//     size: 3,
//     department: 'Engineering',
//     lead: 'Jill',
//     manager: 'Alex',
//     engineer: 'Dave',
//     [Symbol.iterator]: function* (){

//         yield this.lead
//         yield this.manager
//         yield this.engineer
//         yield* this.testingTeam

//     }
// }

// function* TeamIterator(team){

//     yield team.lead
//     yield team.manager
//     yield team.engineer
    // const testingTeamGenerator = TestingTeamIterator(team.testingTeam)
    // yield* testingTeamGenerator
    // yield* team.testingTeam

// }

// function* TestingTeamIterator(team){

//     yield team.lead
//     yield team.tester

// }

// const names = []
// for (let name of TeamIterator(engineeringTeam)){
//     console.log(names.push(name))
// }

// for (let name of engineeringTeam){
//     console.log(names.push(name))
// }

// console.log(names)





// class Comment{

//     constructor(content, children){
//         this.content = content
//         this.children = children
//     }

//     *[Symbol.iterator](){
//         yield this.content
//         for(let child of this.children){
//             yield* child
//         }
//     }

// }

// const children = [
//     new Comment('good comment', []),
//     new Comment('bad gomment', []),
//     new Comment('meh', [])
// ]

// const tree = new Comment('Great Post!', children)

// const values = []
// for(let value of tree){
//     console.log(values.push(value))
// }

// console.log(values)