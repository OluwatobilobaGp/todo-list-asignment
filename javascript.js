document.querySelector('.todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const taskText = todoInput.value.trim();
    
    if (taskText !== '') {
      addTodoItem(taskText);
      todoInput.value = '';
    }
  });

  function addTodoItem(taskText) {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.textContent = '✔';
    completeButton.addEventListener('click', function() {
      listItem.classList.toggle('correct');
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = '✖';
    deleteButton.addEventListener('click', function() {
      listItem.remove();
    });

    actionsDiv.appendChild(completeButton);
    actionsDiv.appendChild(deleteButton);

    listItem.appendChild(taskSpan);
    listItem.appendChild(actionsDiv);

    document.querySelector('.todo-list').appendChild(listItem);
  }
