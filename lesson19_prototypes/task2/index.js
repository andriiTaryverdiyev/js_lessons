const vehicle = {
    move() {
        console.log(`${ship.name} is moving`)
    },
    stop() {
        console.log(`${ship.name} stopped`)
    },
};


const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`)
        vehicle.move()
    },
    stopMachine() {
        vehicle.stop()
        console.log(`${this.name} lifting anchor down`)
    },
}

let con = (Object.values(name))
console.log(con)
for (let i = 0; i < con.length; i++) {
    if (typeof(con[i]) !== 'function') {
        console.log(Object.keys(name)[i])
    }

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
//