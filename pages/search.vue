<template>
  <div>
    <films-list :films="films" />
  </div>
</template>

<script>
import { routsMap } from '@/components/constants'

export default {
  name: 'SearchPage',
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  watch: {
    '$route.query' () {
      this.updateFilms(this.$route.query.namespace, this.$route.query.query)
    }
  },
  mounted () {
    this.updateFilms(this.$route.query.namespace, this.$route.query.query)
    this.$store.commit('search/setQueryPath', 'movies')
  },
  methods: {
    updateFilms (namespace, query) {
      if (routsMap[namespace] !== undefined) {
        this.$store.dispatch('cdn/loadFilms', { path: routsMap[namespace], query: `&query=${query}` })
      } else {
        this.$router.push({ name: 'index' })
      }
    }
  }
}
</script>
