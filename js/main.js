console.log('Hello JS!')

var userName = 'Matan Adi'

console.log('Hello ' + userName + '!')

var country = prompt('What is your country?')
var city = prompt('What is your city?')
var address = country + ', ' + city

console.log('The address is: ' + address)

var age = prompt('What is your age?')

if (age >= 18) {
    console.log('Welcome ' + userName + ', you are ' + age + ' , so you are old enough to buy Beer')
} else {
    console.log('We are sorry, ' + userName + ' , you are ' + age + ', and means that you are too young for buying Beer')
}

var score = 10
if (score > 9) {
    console.log('ecellent!')
} else if (score >= 7) {
    console.log('good!')
} else {
    console.log('not enough!')
}

var firstNum = prompt('Enter a number between 1-9')
var secondNum = prompt('Enter another number between 1-9')

if (firstNum >= 1 && firstNum <= 9 && secondNum >= 1 && secondNum <= 9) {
    if (firstNum > secondNum) {
        console.log(firstNum)
    } else {
        console.log(secondNum)
    }
}