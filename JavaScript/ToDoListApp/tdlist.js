var todos=["Test"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("OK, you quit the app!");

function listTodos() {
  console.log("***********");
    todos.forEach(function(todo, index) {
      console.log(index + ": "+ todo);
    });
    console.log("***********");
}

function addTodo() {
  var newTodo = prompt("enter new todo");
    todos.push(newTodo);
    console.log("It is now added to your todo list.");
}

function deleteTodo() {
  //ask for index of todo to be deleted
    var inDelete = prompt("Enter the index of todo to delete");
    //delete that todo
    todos.splice(inDelete, 1);
    console.log("Index " + inDelete + " was deleted.");
}
