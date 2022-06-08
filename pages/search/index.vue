<template>
  <div>
    <films-list :films="films" />
    <app-pagination path-name="search-page" />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList'
import AppPagination from '@/components/layouts/AppPagination'
import { namespacesMap } from '@/api/constants'

export default {
  name: 'SearchPage',
  components: {
    FilmsList,
    AppPagination
  },
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  mounted () {
    this.$watch(
      () => this.$store.state.cdn.queryString,
      (newVal, oldVal) => {
        this.$store.dispatch('cdn/searchFilms', {
          routeName: namespacesMap[this.$route.query.namespace],
          query: newVal
        })
      }
    )

    this.$store.dispatch('cdn/searchFilms', {
      routeName: namespacesMap[this.$route.query.namespace],
      query: this.$route.query.query
    })
  }
}
</script>
