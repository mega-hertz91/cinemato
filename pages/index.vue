<template>
  <div>
    <films-list :films="films" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  mounted () {
    this.$store.dispatch('cdn/loadFilms', { path: 'movies' })
  }
}
</script>
