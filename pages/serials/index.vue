<template>
  <div>
    <films-list :films="films" />
    <app-pagination path-name="serials-page" />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList'
import AppPagination from '@/components/layouts/AppPagination'

export default {
  name: 'SerialsPage',
  components: {
    AppPagination,
    FilmsList
  },
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  created () {
    this.$store.dispatch('cdn/updateFilms', { routeName: 'serials' })
  }
}
</script>
