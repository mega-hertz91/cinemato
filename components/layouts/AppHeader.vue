<template>
  <div class="bg-gray-800 mb-3">
    <header class="container flex text-gray-300 m-auto w-100 pl-3 pr-3">
      <nav class="flex columns-2 gap-3 w-full font-medium">
        <nuxt-link to="/" class="mr-4 p-2 pl-0 pt-4 pb-4">
          CINEMATO
        </nuxt-link>
        <app-navigation />
      </nav>
    </header>
  </div>
</template>

<script>
import AppNavigation from '@/components/layouts/AppNavigation'

export default {
  name: 'AppHeader',
  components: {
    AppNavigation
  }
}
</script>
