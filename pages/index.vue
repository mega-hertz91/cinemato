<template>
  <div>
    <films-list :films="films" />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList'

export default {
  name: 'IndexPage',
  components: {
    FilmsList
  },
  computed: {
    films () {
      return this.$store.state.cdn.films
    },
    currentPageStore () {
      return this.$store.state.cdn.currentPage
    }
  },
  created () {
    this.$store.dispatch('cdn/updateFilms', { routeName: 'movies' })
  }
}
</script>
