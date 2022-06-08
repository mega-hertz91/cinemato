<template>
  <div>
    <films-list :films="films" />
    <app-pagination path-name="page" />
    <app-modal-dialog />
  </div>
</template>

<script>
import FilmsList from '@/components/FilmsList'
import AppPagination from '@/components/layouts/AppPagination'
import AppModalDialog from '@/components/layouts/AppModalDialog'

export default {
  name: 'DynamicViewPage',
  components: {
    FilmsList,
    AppPagination,
    AppModalDialog
  },
  computed: {
    films () {
      return this.$store.state.cdn.films
    }
  }
}
</script>
