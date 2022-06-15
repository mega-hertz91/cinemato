<template>
  <div>
    <films-list :films="films" />
  </div>
</template>

<script>
export default {
  name: 'MoviesPage',
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  mounted () {
    this.$store.dispatch('cdn/loadFilms', { path: 'movies', query: '&year=2020' })
  }
}
</script>
