fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

     const completed = json.filter(todo=>todo.completed===true).map(todo =>{
            return{userId:todo.userId, title: todo.title};
     });

    console.log(completed);
  })
  .catch(function(err) { 
    console.log(err);
  });