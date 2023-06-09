// seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit');
const editInput = document.querySelector('#edit-input');
const cancelBtn = document.querySelector('#cancel-btn');

let oldInput;

//funções

const saveTodo = (text) => {
    const todo = document.createElement('div');
    todo.classList.add('todo');

    const todoTitle = document.createElement('h3');
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button');
    doneBtn.classList.add('finish-todo')
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-todo')
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('remove-todo')
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo);

    todoInput.value = ""
    todoInput.focus();
};

const toggleForms = () => {
    editForm.classList.toggle('hide');
    todoForm.classList.toggle('hide');
    todoList.classList.toggle('hide');
};

const updateTodo = (text) => {
    

    const todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector('h3')

        if(todoTitle.innerText === oldInput) {
            todoTitle.innerText = text
        }
    })
}
//eventos

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    

    const inputValue = todoInput.value

    if(inputValue) {
        saveTodo(inputValue);
    }
});

document.addEventListener("click", (e) => {
    const targetItem = e.target
    const parentItem = targetItem.closest('div');
    let todoTitle;

    if(parentItem && parentItem.querySelector('h3')) {
        todoTitle = parentItem.querySelector('h3').innerText;
    }

    if(targetItem.classList.contains("finish-todo")){
        parentItem.classList.toggle('done');
    }

    if(targetItem.classList.contains('remove-todo')) {
        parentItem.remove();
    }

    if(targetItem.classList.contains('edit-todo')) {
        toggleForms();

        editInput.value = todoTitle
        oldInput= todoTitle
    }
});
cancelBtn.addEventListener('click', (e) => {
    e.preventDefault()

    toggleForms();
});

editForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const editInput = editInput.value

    if(editInput) {
        updateTodo(editInput)
    }

    toggleForms();
})
