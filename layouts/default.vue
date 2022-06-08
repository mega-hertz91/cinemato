<template>
  <div class="bg-gray-900" style="min-height: 100vh;">
    <app-header ref="header" />
    <main>
      <app-search />
      <page-loader v-show="loading" />
      <Nuxt v-show="!loading && filmsLength > 0" />
      <div v-show="!loading && filmsLength === 0" class="container m-auto p-3 flex flex-wrap flex-row justify-center items-start">
        <div class="w-full flex flex-wrap justify-center">
          <img src="/img/search.png" width="150" height="150" alt="Not found">
          <div class="w-full flex justify-center pt-6">
            <p class="text-gray-300">
              По вашему запросу ничего не найдено :(
            </p>
          </div>
        </div>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/layouts/AppHeader'
import AppSearch from '@/components/layouts/AppSearch'
import AppFooter from '@/components/layouts/AppFooter'
import PageLoader from '@/components/layouts/PageLoader'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppSearch,
    AppFooter,
    PageLoader
  },
  head () {
    return {
      bodyAttrs: {
        class: this.$store.state['modal-dialog'].active ? 'overflow-hidden' : 'overflow-auto'
      }
    }
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
