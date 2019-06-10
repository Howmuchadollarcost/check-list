const form = document.getElementById('form');
const taskInput = document.getElementById('taskName');
const ul = document.getElementById('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = taskInput.value;
    if (taskText) {
        makeTask(taskText);
    }
    form.reset();
})


function removeTask(e) {
    // this.parentNode.parentNode.remove();
    event.path[2].remove()
}

function doneTask(e) {
    var doneText = event.path[1].childNodes[0];
    doneText.style.textDecoration = "line-through";
}


function makeTask() {
    const taskText = taskInput.value;
    const li = document.createElement('li');
    li.id = "li";
    const div = document.createElement('div');
    div.id = 'task';

    const p = document.createElement('p');
    p.innerHTML = taskText;

    const removeButton = document.createElement('button');
    removeButton.innerHTML = "Remove";
    removeButton.id = 'remove';
    removeButton.className = "btn";

    removeButton.addEventListener('click', removeTask);

    const doneButton = document.createElement('button');
    doneButton.innerHTML = "Done";
    doneButton.id = 'done';
    doneButton.className = 'btn';

    doneButton.addEventListener('click', doneTask);

    div.appendChild(p);
    div.appendChild(doneButton);
    div.appendChild(removeButton);

    li.appendChild(div);

    ul.insertBefore(li, ul.childNodes[0]);

}