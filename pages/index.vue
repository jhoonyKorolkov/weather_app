<template>
  <div class="flex-grow">
    <h1 class="text-3xl text-customGreen dark:text-customGreen-dark">
      Заголовок
    </h1>
    <div
      class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
    >
      <div>
        <span
          class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <!-- ... -->
          </svg>
        </span>
      </div>
      <h3
        class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"
      >
        Writes Upside-Down
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        The Zero Gravity Pen can be used to write in any orientation, including
        upside-down. It even works in outer space.
      </p>
    </div>
    <NuxtLink to="/weather">Погода</NuxtLink>
    <!-- <button @click="fetchData">sdsdsd</button> -->
    <UiTheme />
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
