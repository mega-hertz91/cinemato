<template>
  <div class="container m-auto p-3">
    <form class="w-full flex items-stretch">
      <input v-model="query" type="text" placeholder="Введите название фильма" class="p-3 w-11/12">
      <button
        title="Очистить поиск"
        type="button"
        class="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        @click.prevent="clearSearchInput"
      >
        <span class="sr-only">Очистить поиск</span>
        <!-- Heroicon name: outline/x -->
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <button
        type="submit"
        class="w-1/12 bg-gray-700 text-gray-300 hover:bg-gray-800 duration-200 flex justify-center items-center"
        @click.prevent="search"
      >
        <span>Найти</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
  data () {
    return {
      query: ''
    }
  },
  methods: {
    clearSearchInput () {
      this.query = ''
      this.$router.push({ name: 'index' })
    },
    search () {
      this.$store.commit('cdn/setQuery', this.query)
      this.$router.push({
        name: 'search',
        query: {
          query: this.query,
          namespace: this.$store.state.search.path
        }
      })
    }
  }
}
</script>
