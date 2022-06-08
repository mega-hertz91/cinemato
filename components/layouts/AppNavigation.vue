<template>
  <ul class="flex flex-wrap justify-between items-stretch ml-auto main-navigation">
    <li v-for="menuItem in menu" :key="menuItem.id" class="border-bottom hover:bg-gray-700 duration-200 flex items-center">
      <nuxt-link :to="{name: menuItem.path}" class="p-2 pt-4 pb-4">
        {{ menuItem.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      menu: [
        {
          id: 1,
          name: 'Фильмы',
          path: 'movies'
        },
        {
          id: 2,
          name: 'Сериалы',
          path: 'serials'
        }
      ]
    }
  }
}
</script>

<style scoped>
.main-navigation {
  border-bottom: 2px solid #374151;
}
</style>
