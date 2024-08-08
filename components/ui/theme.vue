<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'light'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<template>
  <ClientOnly>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nobis fugit
    possimus magnam, illum dolorum beatae, cupiditate tempore iste, est
    exercitationem labore quam illo deleniti sed animi blanditiis veniam
    aperiam!
    <UButton
      :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      class="absolute md:right-2 top-[35px] md:top-2 left-[70px] md:left-auto"
      @click="isDark = !isDark"
    />
    <template #fallback>
      <div class="w-8 h-8 absolute" />
    </template>
  </ClientOnly>
</template>
