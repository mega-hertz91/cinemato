<template>
  <div>
    <films-list :films="films" />
    <app-pagination path-name="movies-page" />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList'
import AppPagination from '@/components/layouts/AppPagination'

export default {
  name: 'IndexPage',
  components: {
    FilmsList,
    AppPagination
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
