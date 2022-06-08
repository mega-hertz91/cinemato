<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0" @click="closeDialog">
        <div class="relative bg-white text-left overflow-hidden shadow-xl transform transition-all w-8/12">
          <div class="flex justify-start items-center bg-gray-700 pl-3">
            <p class="text-gray-300">
              {{ film['ru_title'] }}
            </p>
            <button
              title="Закрыть окно"
              type="button"
              class="bg-gray-700 p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ml-auto"
              @click.self="closeDialog"
            >
              <span class="sr-only">Закрыть окно</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <iframe :src="film.iframe_src" width="100%" style="height: 65vh;" frameborder="0" allowfullscreen />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppModalDialog',
  computed: {
    film () {
      this.$store.commit('modal-dialog/open')
      return this.$store.state.cdn.films.find(item => item.id === this.$route.params.view)
    }
  },
  methods: {
    closeDialog () {
      this.$store.commit('modal-dialog/close')
      this.$router.back()
    }
  }
}
</script>
