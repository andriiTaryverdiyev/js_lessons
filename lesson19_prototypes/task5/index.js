let name = {
    a: 23,
    b: 25,
    say: function() {
        console.log(this.a)
    },
    n: 30
}

let zis = []
    //console.log(name)

// console.log()
let con = (Object.values(name))
console.log(con)
for (let i = 0; i < con.length; i++) {
    if (typeof(con[i]) !== 'function') {
        console.log(con[i])
    }

}