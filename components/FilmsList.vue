<template>
  <div class="container m-auto">
    <page-loader v-if="$store.state.cdn.loading" />
    <ul v-else class="flex flex-wrap items-stretch w-full">
      <film-card v-for="film in films" :key="film.id" :film="film" />
    </ul>
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard'
import PageLoader from '@/components/layouts/PageLoader'

export default {
  name: 'FilmsList',
  components: {
    PageLoader,
    FilmCard
  },
  props: {
    films: {
      type: Array,
      required: true
    }
  }
}
</script>
