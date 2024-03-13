// Daily Challenge !

const form = document.getElementById("form");
const ul = document.getElementById("listTasks")

form.addEventListener("submit", handleSubmit)
const tasks = [];
let id = 0

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const taskText = formData.get("task");
    if (taskText === "") return;
    const task = generateText(taskText)
    tasks.push(task);
    renderTasks(tasks);
    form.reset();
    // console.log(tasks);
}

function renderTasks(tasks) {
    // console.log(tasks);
    ul.innerHTML = "";
    for (const task of tasks) {
        const li = generateLi(task.text);
        ul.appendChild(li);
    }
}

function generateLi(task) {
    const li = document.createElement("li");

    const xMark = document.createElement("i");
    xMark.classList.add("fa-solid", "fa-xmark")

    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    const span = document.createElement("label");
    span.innerText = task;

    li.append(xMark, checkBox, span);
    return li;
}

function generateText(text) {
    const task = {
        text: text,
        id: id,
        done: false
    }
    id++
    return task;

}