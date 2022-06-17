<template>
  <div>
    <div class="container m-auto px-3">
      <ul class="flex">
        <li
          v-for="(year, index) in $store.state.cdn.years"
          :key="index"
          class="p-2 bg-gray-300 hover:bg-gray-700 duration-200"
        >
          <nuxt-link :to="{name: 'serials-year', params: {year}}">
            {{ year }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <films-list :films="films" />
  </div>
</template>

<script>
import InitRoutePath from '@/mixins/init-route-path'

export default {
  name: 'SerialsPage',
  mixins: [InitRoutePath],
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  mounted () {
    this.$store.dispatch('cdn/loadFilms', { path: 'serials', query: '' })
  }
}
</script>
