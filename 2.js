function logString(str){
    return `The Manipulated String is: ${str}`;
}

function manipulateString(str,logString){
    let upperCase = str.toUpperCase();
    return logString(upperCase);
}

const output= manipulateString('hello, world!', logString);
console.log(output);