fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    /* using Map
     const todoTitles = json.map(todo =>{
            return{title:`${todo.title}`};
     });*/

    const todoTitles = [];
    for(let i=0; i<json.length; i++){
        const entry = {title: json[i].title};
        todoTitles.push(entry); 
    }
    console.log(todoTitles);
  })
  .catch(function(err) { 
    console.log(err);
  });