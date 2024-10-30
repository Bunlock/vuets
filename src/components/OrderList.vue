<script setup lang="ts">
import { inject, ref } from 'vue'
import type { OrderService } from '../services/order.service'

const orderService = inject<OrderService>('orders')!
const orders = ref(orderService.getOrders())

function addOrder() {
  const customer = window.prompt('customer')!

  const date = window.prompt('date')!
  const amount = Number(window.prompt('amount'))!
  const id = crypto.randomUUID()
  console.log(id)
  const order = { id, customer, date, amount }
  orderService.set(order)
  //orders.value.push({ id, customer, date, amount })
}
</script>

<template>
  <h2>https://github.com/Bunlock/vuets</h2>
  <br />
  <button @click="addOrder()">add Order</button>
  <h1>Orders</h1>
  <div v-for="order in orders" :key="order.id">
    <RouterLink to="/order/">{{ order.id }}</RouterLink>
  </div>
</template>
