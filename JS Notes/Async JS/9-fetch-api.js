// fetch api
// this is already a promise. the fetch api method is returning a promise
// the promise is only ever rejected when we get a network error

fetch('todos/jedo.json').then((response) => {
    console.log('resolved', response);
    // response.json returns a promise which when resolved gives us the data that we need.
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});