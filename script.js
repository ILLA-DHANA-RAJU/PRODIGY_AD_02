const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
let isEditing = false;
let editIndex = null;
addBtn.addEventListener('click', function () {
  const task = todoInput.value.trim();
  if (task === '') return;
  if (isEditing) {
    const taskItem = document.querySelectorAll('li')[editIndex];
    taskItem.querySelector('input[type="text"]').value = task;
    isEditing = false;
    editIndex = null;
    addBtn.textContent = 'Add Task';
  } else {
    addTask(task);
  }

  todoInput.value = '';
});

function addTask(task) {
    
  const taskItem = document.createElement('li');
  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.value = task;
  taskInput.readOnly = true;
  
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.classList.add('edit-btn');
  editBtn.addEventListener('click', () => editTask(taskItem));

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => deleteTask(taskItem));

  taskItem.appendChild(taskInput);
  taskItem.appendChild(editBtn);
  taskItem.appendChild(deleteBtn);
  
  todoList.appendChild(taskItem);
}

function editTask(taskItem) {
  const taskInput = taskItem.querySelector('input[type="text"]');
  todoInput.value = taskInput.value;
  isEditing = true;
  editIndex = Array.from(todoList.children).indexOf(taskItem);
  addBtn.textContent = 'Update Task';
}

function deleteTask(taskItem) {
  taskItem.remove();
}
