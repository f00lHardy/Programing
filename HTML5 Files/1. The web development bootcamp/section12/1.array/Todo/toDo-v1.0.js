
let todos = [];

window.setTimeout(function() {
    input = prompt("What would you like to do?");


while(input !== "quit"){
    if(input === "list") {
        console.log(todos);
    } else if(input === "new") {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    input = prompt("What would you like to do?");
}
console.log("OK, You quit the app");
},500);