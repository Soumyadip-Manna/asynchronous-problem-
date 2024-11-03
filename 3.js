function logResult(x,y){
    console.log(`The person's full name is ${x} and their age in days is ${y}`);
}
let person = {
    firstName : 'soumyadip',
    lastName : 'manna',
    age: '2004'
}

function ageInDays(person ,logResult){
    let fullName = person.firstName + ' ' + person.lastName;
    let date = new Date();
    
    let ageInDaysCalculate = (date.getFullYear() - Number(person.age)) * 365;

    return logResult(fullName,ageInDaysCalculate);
}





ageInDays(person,logResult);