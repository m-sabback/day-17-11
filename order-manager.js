class Order{
    constructor(id, items){
        this.id = id
        this.items = items
        this.totalPrice = this.calculateTotal()
    }
    calculateTotal(){
        return this.items.reduce((sum, item) => sum + item.price ,0)
    }
}

class OrderManager {
    constructor(){
        this.orders = []
        this.currentId = 1
    }
    createOrder(items){
        const order = new Order(this.currentId++, items)
        this.orders.push(order)
        return order
    }
    getTotalSales(){
        return this.orders.reduce((sum, order) => sum + order.totalPrice ,0)
    }
}

const burger = {name: 'Burger', price: 15}
const pizza = {name: 'Pizza', price: 24}
const juice = {name: 'Juice', price: 5}
const water = {name: 'Water', price: 1}

const manager = new OrderManager()
manager.createOrder([burger, juice])
manager.createOrder([pizza, juice])
manager.createOrder([water, burger])

console.log(manager)
