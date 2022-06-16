<template>
  <div>
    <app-modal-dialog :film="film" />
  </div>
</template>

<script>
import AppModalDialog from '~/components/layouts/AppModalDialog'
export default {
  name: 'ViewIdPages',
  components: { AppModalDialog },
  computed: {
    film () {
      return this.$store.getters['cdn/filmById'](this.$route.params.id)
    }
  },
  mounted () {
    this.$store.dispatch('cdn/loadFilms', { path: this.$route.params.path === 'index' ? 'movies' : this.$route.params.path, query: `&field=${this.$route.params.id}` })
  }
}
</script>
