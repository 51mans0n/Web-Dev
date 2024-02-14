document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для существующих кнопок удаления
    document.querySelectorAll('.delete').forEach(function(button) {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    // Обработчик для существующих чекбоксов
    document.querySelectorAll('.todo-list input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                this.nextSibling.classList.add('completed');
            } else {
                this.nextSibling.classList.remove('completed');
            }
        });
    });

    // Обработчик для кнопки добавления новой задачи
    document.getElementById('add-task').addEventListener('click', function() {
        const taskList = document.querySelector('.todo-list');
        const newTaskInput = document.getElementById('new-task');
        const newTask = newTaskInput.value.trim();

        if (newTask) {
            const listItem = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            const label = document.createElement('label');
            const deleteButton = document.createElement('button');

            // Настройка и добавление обработчика для нового чекбокса
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    label.classList.add('completed');
                } else {
                    label.classList.remove('completed');
                }
            });

            // Настройка и добавление обработчика для новой кнопки удаления
            deleteButton.textContent = '🗑️';
            deleteButton.className = 'delete';
            deleteButton.addEventListener('click', function() {
                listItem.remove();
            });

            label.appendChild(document.createTextNode(newTask));
            listItem.appendChild(checkbox);
            listItem.appendChild(label);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);

            newTaskInput.value = ''; // Очищаем поле ввода после добавления задачи
        }
    });
});
