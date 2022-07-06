const rooms = {
    room1: [{ name: 'Jack' }, { name: 'Andrey' }],
    room2: [{ name: 'Max' }, { name: 'Alex' }]
}
const getPeople = obj => {
    console.log(Object.values(obj).flat(Infinity)
        .map(el => Object.values(el)).flat(Infinity))
};
getPeople(rooms)