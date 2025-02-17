const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");


addBtn.addEventListener('click',()=>addTodo());
todoInput.addEventListener('keypress',(e)=>{
    if (e.key === "Enter"){
        addTodo();
    }
});

const addTodo = () =>{
    const todoText = todoInput.value.trim();

    if (!todoText.trim()) return;

    const todo = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = todoText;
    todo.appendChild(p);
    todo.classList.add("todo");

    const span = document.createElement("span");

    const checkBtn = document.createElement("button");
    checkBtn.innerText = "🗸";
    checkBtn.addEventListener("click", () => {
      p.style.textDecoration = "line-through";
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "✎";
    editBtn.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = p.innerText;
      input.classList.add("edit-input");

      p.replaceWith(input);
      input.focus();

      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          saveEdit(input, p);
        }
      });

      input.addEventListener("blur", () => {
        saveEdit(input, p);
      });
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "𐄂";
    deleteBtn.addEventListener("click", () => {
      todo.remove();
    });

    span.appendChild(checkBtn);
    span.appendChild(editBtn);
    span.appendChild(deleteBtn);

    todo.appendChild(span);

    todoList.appendChild(todo);

    todoInput.value = "";
}

const saveEdit = (input,p) =>{
    const newText = input.value.trim();
    if (newText) {
      p.innerText = newText;
    }
    input.replaceWith(p);
}

