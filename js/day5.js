function getLabelValue(elLabel) {
    var value = document.querySelector(elLabel).value
    return value
}

/**  
 *   Before getMult() made
 */
// function printMult() {
//     var num1 = getLabelValue('.firstNum')
//     var num2 = getLabelValue('.second-num')
//     var mult = num1 * num2
//     ball.innerText = mult
// }


/**
 * Prints the multiplication of the input number on the ball
 */
function printMult() {
    ball.innerText = "The mult is: " + getMult()
}

/**
 * Get the value of the inputs first-num and second-num
 * and returns the multiplication of them.
 * @returns Result of the multiplication of num1 and num2
 */
function getMult() {
    var num1 = getLabelValue('.firstNum')
    var num2 = getLabelValue('.second-num')
    var res = num1 * num2
    return res
}

var names = ["Shuki", "Muki", "Puki", "Kuki", "Shituki"]
// arrayOfStrings(names)

/**
 * 
 * @param {array strings} arr 
 * Task 3
 */
function arrayOfStrings(arr) {
    console.log("arr.lenght: ", arr.length);
    console.log("arr[1]: ", arr[1]);
    console.log("last index value", arr[arr.length - 1]);

    console.log("for loop:");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === "Puki") {
            console.log("Hey! i Know You!");
        }
    }
}

var numbers = [30, 6, 22, 8, 13, 90]
// printArray(numbers)
// console.log("Sum: " + getSum(numbers))

/**
 * 
 * @param {array numbers} arr 
 * Task 4
 */
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log("arr[" + i + "] = " + arr[i]);
        } else {
            arr[i] *= 10
            console.log("arr[" + i + "] * 10 = " + arr[i]);
        }
    }
}

/**
 * Task 5
 * @param {array numbers} nums 
 * @returns The sum of all the numbers in the array
 */
function getSum(nums) {
    var sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum
}

