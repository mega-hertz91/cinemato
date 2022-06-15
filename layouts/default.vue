<template>
  <div class="bg-gray-900" style="min-height: 100vh;">
    <app-header ref="header" />
    <main>
      <app-search />
      <Nuxt />
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader'
import AppFooter from '@/components/layouts/AppFooter'
import AppSearch from '@/components/layouts/AppSearch'

export default {
  name: 'DefaultLayout',
  components: {
    AppSearch,
    AppHeader,
    AppFooter
  },
  computed: {
    loading () {
      return this.$store.state.cdn.loading
    },
    filmsLength () {
      return this.$store.state.cdn.films.length
    }
  }
}
</script>
