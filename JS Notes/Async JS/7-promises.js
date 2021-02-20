const getTodos = (resource, callback) => {
  
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        // This block of code consoles the api request
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200 ) {
                const data = JSON.parse(request.responseText)
                // pass resolve instead of a callback 
                resolve(data);
            } else if(request.readyState === 4) {        
                reject("Some error in the request...")
            }
        })
        request.open('GET', resource) 
        request.send();
    })
};

getTodos('todos/jedo.json').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})




// // promise example - dummy example
// // one of two outcomes, either resolved (we get the data we want) or rejected (we get an error at some point).
//  const getSomething = () => {
//      return new Promise((resolve, reject) => {
//          // fetch something
//          resolve('some data')
//         //  reject('some error')
//      })
//  }
//  getSomething().then((data) => {
//      console.log(data);
//  }).catch((err) => {
//      console.log(err);
//  })