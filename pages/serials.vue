<template>
  <div>
    <div class="container m-auto px-3">
      <ul class="flex">
        <li
          v-for="(year, index) in years"
          :key="index"
          class="p-2 bg-gray-300 hover:bg-gray-700 duration-200"
        >
          <nuxt-link :to="{name: 'serials', query: {year}}">
            {{ year }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <films-list :films="films" />
  </div>
</template>

<script>
export default {
  name: 'SerialsPage',
  data () {
    return {
      years: ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013']
    }
  },
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  },
  watch: {
    '$route.query' () {
      this.$store.dispatch('cdn/loadFilms', { path: 'serials', query: `&year=${this.$route.query.year}` })
    }
  },
  mounted () {
    this.$store.dispatch('cdn/loadFilms', { path: 'serials', query: `&year=${this.$route.query.year ? this.$route.query.year : '2020'}` })
  }
}
</script>
