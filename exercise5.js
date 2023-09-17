fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todos=[];
     for(let i=0; i<110; i++){
        const entry = {userId:json[i].userId, title: json[i].title};
        todos.push(entry); 
    }
    console.log(todos);
  })
  .catch(function(err) { 
    console.log(err);
  });