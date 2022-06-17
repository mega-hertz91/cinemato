<template>
  <div class="container m-auto">
    <page-loader v-if="$store.state.cdn.loading" />
    <ul v-else class="flex flex-wrap items-stretch w-full">
      <film-card v-for="film in films" :key="film.id" :film="film" />
    </ul>
    <div class="flex justify-center pt-6">
      <button class="border round gb-gray-300 text-gray-300 px-8 py-4 duration-200" :class="{['opacity-25']: disabled}" :disabled="disabled" @click="loadFilms">
        Загрузить еще
      </button>
    </div>
  </div>
</template>

<script>
import FilmCard from '@/components/FilmCard'
import PageLoader from '@/components/layouts/PageLoader'
import { routsMap } from '@/components/constants'

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
  },
  computed: {
    disabled () {
      return this.$store.state.cdn.currentPage >= this.$store.state.cdn.totalPages
    }
  },
  methods: {
    loadFilms () {
      if (!this.$store.state.search.path) {
        this.$store.dispatch('cdn/addFilms', {
          path: 'movies',
          query: `
          ${this.$route.params.year ? `&year=${this.$route.params.year}` : ''}
          ${this.$store.state.cdn.currentPage ? `&page=${this.$store.state.cdn.currentPage + 1}` : ''}
          ${this.$route.query.query ? `&query=${this.$route.query.query}` : ''}
          `
        })
      } else {
        this.$store.dispatch('cdn/addFilms', {
          path: routsMap[this.$store.state.search.path],
          query: `
          ${this.$route.params.year ? `&year=${this.$route.params.year}` : ''}
          ${this.$store.state.cdn.currentPage ? `&page=${this.$store.state.cdn.currentPage + 1}` : ''}
          ${this.$route.query.query ? `&query=${this.$route.query.query}` : ''}
          `
        })
      }
    }
  }
}
</script>
