<template>
  <div>
    <films-list :films="films" />
  </div>
</template>

<script>

export const namespacesMap = {
  index: 'movies',
  serials: 'serials',
  movies: 'movies'
}

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
  },
  methods: {
    updateFilms (namespace, query) {
      if (namespacesMap[namespace] !== undefined) {
        this.$store.dispatch('cdn/loadFilms', { path: namespacesMap[namespace], query: `&query=${query}` })
      } else {
        this.$router.push({ name: 'index' })
      }
    }
  }
}
</script>
