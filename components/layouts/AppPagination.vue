<template>
  <div class="container m-auto flex justify-center pt-6 pb-3">
    <ul class="flex flex-wrap justify-between items-stretch">
      <li>
        <nuxt-link :to="{name: pathName, params: {page: 1}, query: $route.query}" class="p-2 bg-gray-300">
          &lt;&lt;
        </nuxt-link>
      </li>
      <li v-for="(paginatorItem, index) in paginator.start" :key="index">
        <nuxt-link :to="{name: pathName, params: {page: paginatorItem}, query: $route.query}" class="p-2 bg-gray-300">
          {{ paginatorItem }}
        </nuxt-link>
      </li>
      <li>
        <a href="#" class="p-2 bg-gray-100" @click.prevent.stop>
          {{ paginator.currentPage }}
        </a>
      </li>
      <li v-for="(paginatorItem, index) in paginator.end" :key="index + 5">
        <nuxt-link :to="{name: pathName, params: {page: paginatorItem}, query: $route.query}" class="p-2 bg-gray-300">
          {{ paginatorItem }}
        </nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name: pathName, params: {page: $store.state.cdn.totalPages}, query: $route.query}" class="p-2 bg-gray-300">
          &gt;&gt;
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    pathName: {
      type: String,
      required: true
    }
  },
  computed: {
    paginator () {
      const paginatorCount = Array.apply(null, { length: this.$store.state.cdn.totalPages }).map(Number.call, Number)
      const end = paginatorCount.splice((Number(this.$store.state.cdn.currentPage) + 1), 5)
      const start = this.$store.state.cdn.currentPage > 5 ? paginatorCount.splice((Number(this.$store.state.cdn.currentPage) - 5), 5) : []
      return { start, end, currentPage: this.$store.state.cdn.currentPage }
    }
  }
}
</script>
