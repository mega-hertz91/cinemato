<template>
  <li class="w-full sm:w-6/12 lg:w-3/12 xl:w-3/12 2xl:w-2/12 p-3 cursor-pointer">
    <div class="border film-card h-full" @click.prevent="openDialog(film)">
      <img :src="`https://st.kp.yandex.net/images/film_iphone/iphone360_${film['kinopoisk_id']}.jpg`" :alt="film['ru_title']" class="w-full h-auto">
      <div class="pt-3 pb-3">
        <p class="text-gray-300">
          {{ film['ru_title'] }}
        </p>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'FilmCard',
  props: {
    film: {
      type: Object,
      required: true
    }
  },
  methods: {
    openDialog (film) {
      this.$store.commit('modal-dialog/open', film)
    }
  }
}
</script>

<style scoped>
.film-card {
  border-color: #374151;
  text-align: center;
}
</style>
