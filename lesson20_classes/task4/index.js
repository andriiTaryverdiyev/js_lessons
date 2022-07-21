class Order {
    constructor(price, city, type) {
        this.price = price
        this.city = city
        this.type = type
        this.ID = Math.random()
    }

    checkPrice() {
        return (this.price > 1000)
    }

    confirmOrder() {}
    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') {
            return true
        }
        return false
    }
}

const order1 = new Order(1100, 'Putzenberg', 'dick')

console.log(order1.checkPrice())
console.log(order1.confirmOrder())
console.log(order1.isValidType())