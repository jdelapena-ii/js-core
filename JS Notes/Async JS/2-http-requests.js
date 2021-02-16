// HTTP Request
// - Make HTTP requests to get data from another server
// - We make these requests to API endpoints

const getTodos = (callback) => {
    // Traditional way of request. Making a request object
    // request variable is now an object
    const request = new XMLHttpRequest(); // built in to the JS language

    // This block of code consoles the api request
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState)
        if(request.readyState === 4 && request.status === 200 ) {
            // console.log(request.responseText);
            callback(undefined, request.responseText)
        } else if(request.readyState === 4) {
            // console.log("Could not fetch the data...");
            callback("Could not fetch data", undefined)
        }
    })
    // .open() method takes two parameters. When we get some data, we use the GET request.
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/') // This only sets up the request. It doesn't send the request yet.
    request.send();
};

// For sample purposes. Fire multiple console logs to test if  the async function will block them.
console.log(1);
console.log(2);
console.log(3);
getTodos((err, data) => {
    console.log("Callback function fired!!!")
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});
console.log(4);
console.log(5);
console.log(6);