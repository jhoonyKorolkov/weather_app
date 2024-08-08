<template>
  <div>
    <NuxtLink to="/weather">Погода</NuxtLink>
    <button @click="fetchData">sdsdsd</button>
  </div>
</template>

<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig()

// 'https://api.weatherapi.com/v1/current.json?q=London&lang=ru&key=f889f810c5af463ca4e111529242904'
const fetchData = async () => {
  try {
    const data: object = await $fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    )
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}
</script>
