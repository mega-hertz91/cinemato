<template>
  <div>
    <films-list :films="films" />
    <app-pagination path-name="movies-page" />
  </div>
</template>

<script>
import AppPagination from '@/components/layouts/AppPagination'
import FilmsList from '@/components/FilmsList'

export default {
  name: 'DynamicPageMovies',
  components: {
    FilmsList,
    AppPagination
  },
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  created () {
    this.$store.dispatch('cdn/updateFilms', { routeName: 'movies', page: this.$route.params.page })
  }
}
</script>
