const vehicle = {
    move() {
        console.log(`${ship.name} is moving`)
    },
    stop() {
        console.log(`${ship.name} stopped`)
    }
};
const ship = {
    name: 'Argo',
    startMachine: function() {
        console.log(`${this.name} lifting anchor up`)
        vehicle.move()
    },
    stopMachine: function() {
        vehicle.stop()
        console.log(`${this.name} lifting anchor down`)
    },
}

function getOwnProps() {
    let result = []
    for (let prop in ship) {
        if (ship.hasOwnProperty(prop)) {
            if (typeof(prop) !== 'function') {
                result.push(prop)
            }
        }
    }
    console.log(result)
}
getOwnProps()

// export function getOwnProps(obj) {
//     let result = []
//     for (let prop in obj) {
//         if (obj.hasOwnProperty(prop)) {
//                 result.push(prop)
//         }
//     }
//     return result
// }