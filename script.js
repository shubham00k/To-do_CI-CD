/* exported addTask */
function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
        document.getElementById('taskList').appendChild(li);
        input.value = '';

        // Save to localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    const task = li.textContent.replace('Delete', '').trim();
    li.remove();

    // Update localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
    });
};