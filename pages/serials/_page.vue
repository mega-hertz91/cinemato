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
  name: 'DynamicSerialsPage',
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
    this.$store.dispatch('cdn/updateFilms', { routeName: 'serials', page: this.$route.params.page })
  }
}
</script>
