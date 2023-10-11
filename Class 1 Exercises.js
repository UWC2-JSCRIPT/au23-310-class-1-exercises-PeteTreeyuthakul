/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const pizzaSmall = 13
const pizzaLarge = 17

let areaPizzaSmall=Math.PI*((pizzaSmall/2)**2)
console.log(areaPizzaSmall)
let areaPizzaLarge=Math.PI*((pizzaLarge/2)**2)
console.log(areaPizzaLarge)

// 2. What is the cost per square inch of each pizza?

const costPizzaSmall = 16.99
const costPizzaLarge = 19.99

let costPerAreaSmall = costPizzaSmall/areaPizzaSmall
let costPerAreaLarge = costPizzaLarge/areaPizzaLarge

console.log(costPerAreaSmall)
console.log(costPerAreaLarge)

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const lowestCard = 1
const highestCard = 13

let card1 = Math.floor((Math.random()*(highestCard-lowestCard))+lowestCard)
console.log(card1)
let card2 = Math.floor((Math.random()*(highestCard-lowestCard))+lowestCard)
console.log(card2)
let card3 = Math.floor((Math.random()*(highestCard-lowestCard))+lowestCard)
console.log(card3)


// 4. Draw 3 cards and use Math to determine the highest
// card

let maxCard = Math.max(card1,card2,card3)
console.log(maxCard)

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = 'Pete' 
let lastName = 'Tree'
let streetAddress = '39th Ave S'
let city = 'Seattle'
let state = 'WA'
let zipCode = '98118'

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let envelopFormatted=`${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`

console.log(envelopFormatted)
console.log(envelopFormatted.indexOf('Tree'))
let nameOnEnvelop = envelopFormatted.substring(0,envelopFormatted.indexOf('Tree')-1)
console.log(nameOnEnvelop)

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate =new Date(2020, 3,1)

console.log(startDate.getTime())
console.log(endDate.getTime())

let diffTime= (endDate.getTime()-startDate.getTime())/2
let midDate = new Date(startDate.getTime()+diffTime)

console.log(midDate)

