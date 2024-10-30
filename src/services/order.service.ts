import { ref } from 'vue'
import type { Order } from '../interfaces/order'

export class OrderService {
  private orders = ref(<Order[]>[])

  getOrders() {
    return this.orders
  }
  get(orderId: string) {
    return this.orders.value.find(o => o.id == orderId)
  }
  set(order: Order) {
    this.orders.value.push(order)
    console.log('len', this.orders.value.length)
  }
}
