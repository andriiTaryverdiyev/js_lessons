const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const clearButton = document.querySelector('.clear-btn')
const eventsList = document.querySelector('.events-list')

const removeEvents = () => {
    while (eventsList.lastChild) {
        eventsList.removeChild(eventsList.firstChild)
    }
}

const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    eventsListElem.innerHTML += `<span style = "color:${color};margin-left:8px" >${text}</span>`
};

const logGreenDiv = logTarget.bind(null, 'div', 'green')
const logGreenP = logTarget.bind(null, 'p', 'green')
const logGreenspan = logTarget.bind(null, 'span', 'green')

const logGreyDiv = logTarget.bind(null, 'div', 'grey')
const logGreyP = logTarget.bind(null, 'p', 'grey')
const logGreyspan = logTarget.bind(null, 'span', 'grey')


divElem.addEventListener('click', logGreenDiv)
pElem.addEventListener('click', logGreenP)
spanElem.addEventListener('click', logGreenspan)

divElem.addEventListener('click', logGreyDiv, true)
pElem.addEventListener('click', logGreyP, true)
spanElem.addEventListener('click', logGreyspan, true)

clearButton.addEventListener('click', removeEvents)