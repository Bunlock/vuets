<script setup lang="ts">
import { inject, reactive } from 'vue'
import type { OrderService } from '../services/order.service'

function addOrder() {
  const customer = window.prompt('customer')!
  const date = window.prompt('date')!
  const amount = Number(window.prompt('amount'))!
  const id = crypto.randomUUID()
  console.log(id)
  //  orders.push({ id, customer, date, amount })
  orderService.set({ id, customer, date, amount })
}
const orderService = inject<OrderService>('orders')!

const orders = reactive(orderService.getOrders())
</script>

<template>
  <button @click="addOrder()">add Order</button>
  <h2>https://github.com/Bunlock/vuets</h2>
  <h1>Orders</h1>
  <div v-for="order in orders" :key="order.id">
    <RouterLink to="/order/">{{ order.id }}</RouterLink>
  </div>
</template>
