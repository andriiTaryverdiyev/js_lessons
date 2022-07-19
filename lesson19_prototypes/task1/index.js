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
     startMachine() {
         console.log(`${this.name} lifting anchor up`)
         vehicle.move()
     },
     stopMachine() {
         vehicle.stop()
         console.log(`${this.name} lifting anchor down`)
     },
 }
 ship.startMachine()
 ship.stopMachine()