class Order {
    constructor(price, city, type) {
        this.price = price
        this.city = city
        this.type = type
        this.id = '' + Math.random()
        this.dateCreated = new Date
        this.isConfirmed = false
    }

    checkPrice() {
        return (this.price > 1000)
    }

    confirmOrder() {
        this.isConfirmed = true
        this.dateConfirmed = new Date
    }
    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') {
            return true
        }
        return false
    }
}

const order1 = new Order(1100, 'Putzenberg', 'dick')
console.log(order1)
console.log(order1.checkPrice())
console.log(order1.confirmOrder())
console.log(order1.isValidType())