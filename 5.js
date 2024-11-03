function greetings(name){
    return new Promise((resolve,reject) => {
        const Greeting = `Hello ${name}`;
        resolve(Greeting);
    });
};

greetings('soumya')
    .then((response) => {
        console.log(response);
    });