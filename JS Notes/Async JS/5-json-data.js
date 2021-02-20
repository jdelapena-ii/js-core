// HTTP Request
// - Make HTTP requests to get data from another server
// - We make these requests to API endpoints

const getTodos = (callback) => {
    // Traditional way of request. Making a request object
    // request variable is now an object
    const request = new XMLHttpRequest(); // built in to the JS language

    // This block of code consoles the api request
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200 ) {
            const data = JSON.parse(request.responseText)
            callback(undefined, data)
        } else if(request.readyState === 4) {        
            callback("Could not fetch data", undefined)
        }
    })
    // .open() method takes two parameters. When we get some data, we use the GET request.
    request.open('GET', 'todos/jedo.json') // This only sets up the request. It doesn't send the request yet.
    request.send();
};


getTodos((err, data) => {
    console.log("Callback function fired!!!")
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});