const tasks = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
let memory = -1
const idGenerator = () => {
    memory += 1
    return memory
}

const renderTasks = tasksList => {
    const tasksElems = tasksList
        .sort((a, b) => a.done - b.done)
        .map(({ text, done }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.dataset.id = idGenerator()
            const checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.checked = done;
            checkbox.dataset.id = listItemElem.dataset.id
            checkbox.classList.add('list__item-checkbox');
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            listItemElem.append(checkbox, text);

            return listItemElem;
        });

    listElem.append(...tasksElems);
};

const reload = () => {
    while (listElem.firstChild) {
        listElem.removeChild(listElem.firstChild)
    }
    memory = -1
    renderTasks(tasks);
}

renderTasks(tasks);

const checkButtons = document.querySelectorAll('.list__item-checkbox')
const listItemElem = document.querySelector('li')

// Block with problems ---------------------------------------

listElem.addEventListener('click', changeStatus)

function changeStatus(event) {
    let mem = tasks[event.target.dataset.id]
    mem.done === false ? mem.done = true : mem.done = false
    reload()
    console.log(mem.done)
}
// for (let elem of checkButtons) {
//     console.log('test')
//     const changeStatus = () => {
//         console.log(tasks[elem.dataset.id].done)
//         if (tasks[elem.dataset.id].done = true) {
//             tasks[elem.dataset.id].done = false
//             console.log(tasks[elem.dataset.id].done)
//             reload()
//         }
//         if (tasks[elem.dataset.id].done != true) {
//             tasks[elem.dataset.id].done = true
//             console.log(tasks[elem.dataset.id].done)
//             reload()
//         }
//     }
//     elem.addEventListener('change', changeStatus, reload)
// }


//------------------------------------------------------------


const input = document.querySelector('.task-input')
const createButton = document.querySelector('.create-task-btn')

const taskCreator = () => {
    console.log(input.value)
    if (input.value.length > 0) {
        tasks.push({ text: input.value, done: false })
        reload()
    }

    reload()
}
createButton.addEventListener('click', taskCreator)