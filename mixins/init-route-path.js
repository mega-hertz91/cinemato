export default {
  mounted () {
    this.$store.commit('search/setQueryPath', this.$route.name)
  }
}
