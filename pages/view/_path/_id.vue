<template>
  <div>
    <app-modal-dialog :film="film" />
    <films-list :films="films" />
  </div>
</template>

<script>
import AppModalDialog from '~/components/layouts/AppModalDialog'

export default {
  name: 'ViewIdPages',
  components: { AppModalDialog },
  computed: {
    film () {
      return this.$store.state.cdn.film
    },
    films () {
      return this.$store.state.cdn.films
    }
  },
  mounted () {
    this.$store.dispatch('cdn/loadFilmByID', this.$route.params.id)
  }
}
</script>
