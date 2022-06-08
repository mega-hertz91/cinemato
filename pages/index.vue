<template>
  <div>
    <films-list :films="films" />
    <app-pagination path-name="page" />
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
  mounted () {
    this.$store.dispatch('cdn/lastFilms', { routeName: 'movies' })
  }
}
</script>
