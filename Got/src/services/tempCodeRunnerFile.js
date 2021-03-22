let url = 'https://jsonplaceholder.typicode.com/todos/1',
    data = {username: 'example'};

    fetch( url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
           'Content-Type': 'application/json'
        }
    })
.then ((response) => {
      return response.json(); 
})
.then((myJson) => console.log(myJson));
    