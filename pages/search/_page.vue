<template>
  <div>
    <films-list :films="films" />
    <app-pagination path-name="search" />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList'
import AppPagination from '@/components/layouts/AppPagination'
import { namespacesMap } from '@/api/constants'

export default {
  name: 'SearchPageDynamic',
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
    this.$store.dispatch('cdn/lastFilms', {
      routeName: namespacesMap[this.$route.query.namespace],
      query: this.$route.query.query,
      page: this.$route.params.page
    })
  }
}
</script>
