var todos=["Test"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var newTodo = prompt("enter new todo");
    todos.push(newTodo);
    console.log(todos);
  }
  input = prompt("What would you like to do?");
}
console.log("OK, you quit the app!");
