/*Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a new array where each
element is doubled using the callback. */

let arr = [1, 2, 3,4,5];

function doubled(arr){
    return arr * 2;
}

function calculate(arr,doubled){
    let output = [];
    for(let i=0; i<arr.length; i++){
       output.push(doubled(arr[i]));
    }
    return output;
}


console.log(calculate(arr,doubled));