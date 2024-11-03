const api1 =  "https://jsonplaceholder.typicode.com/todos/1";
const api2 = "https://jsonplaceholder.typicode.com/posts/1";

async function getCombineData() {
    let response1 = await fetch(api1);
    let result1 = await response1.json();
    
    let response2 = await fetch(api2);
    let result2 = await response2.json();
    const obj = {
        todo : result1,
        post : result2
    };
    return obj;
}

getCombineData().then((data) => {
    console.log(data);
});