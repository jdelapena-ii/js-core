// async await

// Async Await allows us to chain promises together in a cleaner and much more readable way

const getTodos = async () => { // this is now an asynchronous function that always return a promise
    const response = await fetch('todos/jedo.json') // the fetch returns a promise. the await keyword stores js and stops it from assigning a value to the response variable until the promise has resolved
    if(response.status !== 200){
        throw new Error('cannot fetch the data'); // returnning a new error object
    }
    const data = await response.json();
    return data;
}

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(error => console.log('rejected:', error.message))


// fetch('todos/jedo.json').then((response) => {
//     console.log('resolved', response);
//     // response.json returns a promise which when resolved gives us the data that we need.
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });