fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const result=[];

     for(let i=1; i<=20;i++){
        const completed = json.filter(todo=>todo.userId==i&&todo.completed==true);
        const num = completed.length;
        result.push(num);
     }   
     console.log(result);
    }
    )
  .catch(function(err) { 
    console.log(err);
  });