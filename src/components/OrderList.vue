<script setup lang="ts">
import { reactive } from 'vue'
import type { Order } from '../interfaces/order'

function addOrder() {
  const customer = window.prompt('customer')!
  const date = window.prompt('date')!
  const amount = Number(window.prompt('amount'))!
  const id = crypto.randomUUID()
  console.log(id)
  orders.push({ id, customer, date, amount })
}

const orders = reactive<Order[]>([])
</script>

<template>
  <button @click="addOrder()">add Order</button>

  <h1>Orders</h1>
  <div v-for="order in orders" :key="order.id">
    {{ order }}
  </div>
</template>
