document.addEventListener('DOMContentLoaded', function() {
    function saveTasks() {
        const tasks = document.querySelectorAll('.todo-list li');
        const tasksData = Array.from(tasks).map(task => {
            return {
                text: task.querySelector('label').textContent,
                completed: task.querySelector('input').checked
            };
        });
        localStorage.setItem('tasks', JSON.stringify(tasksData));
    }

    function loadTasks() {
        const tasksData = JSON.parse(localStorage.getItem('tasks'));
        if (tasksData) {
            tasksData.forEach(taskData => {
                addTask(taskData.text, taskData.completed);
            });
        }
    }

    function addTask(text, completed) {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = completed;
        const label = document.createElement('label');
        label.textContent = text;
        if (completed) {
            label.classList.add('completed');
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '🗑️';
        deleteButton.className = 'delete';

        checkbox.addEventListener('change', function() {
            if (this.checked) {
                label.classList.add('completed');
            } else {
                label.classList.remove('completed');
            }
            saveTasks();
        });

        deleteButton.addEventListener('click', function() {
            listItem.remove();
            saveTasks();
        });

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(deleteButton);
        document.querySelector('.todo-list').appendChild(listItem);
    }

    document.getElementById('add-task').addEventListener('click', function() {
        const newTaskInput = document.getElementById('new-task');
        const newTask = newTaskInput.value.trim();

        if (newTask) {
            addTask(newTask, false);
            saveTasks();
            newTaskInput.value = '';
        }
    });

    loadTasks();
});
