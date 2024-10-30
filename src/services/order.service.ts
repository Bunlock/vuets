import type { Order } from '../interfaces/order'

export class OrderService {
  private orders = <Order[]>[]

  getOrders() {
    return this.orders
  }
  get(orderId: string) {
    return this.orders.find(o => o.id == orderId)
  }
  set(order: Order) {
    this.orders.push(order)
  }
}
