<template>
  <div class="container m-auto">
    <ul class="flex flex-wrap items-stretch w-full">
      <film-card v-for="film in films" :key="film.id" :film="film" />
    </ul>
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard'

export default {
  name: 'FilmsList',
  components: {
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
