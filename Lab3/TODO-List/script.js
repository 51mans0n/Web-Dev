document.addEventListener('DOMContentLoaded', function() {
    const existingDeleteButtons = document.querySelectorAll('.delete');
    existingDeleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    document.getElementById('add-task').addEventListener('click', function() {
        const taskList = document.querySelector('.todo-list');
        const newTaskInput = document.getElementById('new-task');
        const newTask = newTaskInput.value.trim();

        if (newTask) {
            const listItem = document.createElement('li');
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '🗑️';
            deleteButton.className = 'delete';

            deleteButton.addEventListener('click', function() {
                listItem.remove();
            });

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(newTask));
            listItem.appendChild(label);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            newTaskInput.value = '';
        }
    });
});
